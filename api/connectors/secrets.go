package connectors

import (
	"context"
	"fmt"
	"os"
	"sync"

	secretmanager "cloud.google.com/go/secretmanager/apiv1"
	secretmanagerpb "google.golang.org/genproto/googleapis/cloud/secretmanager/v1"
)

type SecretManager struct {
	project string
	client  *secretmanager.Client
}

func NewSecretManager(ctx context.Context) (SecretManager, error) {
	project, exists := os.LookupEnv("GOOGLE_CLOUD_PROJECT")
	if !exists {
		return SecretManager{}, fmt.Errorf("EnvVar GOOGLE_CLOUD_PROJECT not found")
	}

	client, err := secretmanager.NewClient(ctx)
	if err != nil {
		return SecretManager{}, err
	}

	return SecretManager{
		project: project,
		client:  client,
	}, nil

}

func (sm *SecretManager) GetSecret(ctx context.Context, id string) (string, error) {
	accVersionReq := &secretmanagerpb.AccessSecretVersionRequest{
		Name: fmt.Sprintf("projects/%s/secrets/%s/versions/latest", sm.project, id),
	}

	accVersionRes, err := sm.client.AccessSecretVersion(ctx, accVersionReq)
	if err != nil {
		return "", err
	}

	return accVersionRes.GetPayload().String(), nil
}

func (sm *SecretManager) GetSecrets(ctx context.Context, ids []string) (map[string]string, error) {
	secrets := make(map[string]string)
	errs := make(chan error)
	wg := sync.WaitGroup{}
	wg.Add(len(ids))

	// Close errs channel when all tasks are done
	go func() {
		wg.Wait()
		close(errs)
	}()

	for _, id := range ids {
		go func(id string) {
			defer wg.Done()
			secret, err := sm.GetSecret(ctx, id)
			if err != nil {
				errs <- err
				return
			}

			secrets[id] = secret
		}(id)
	}

	// Wait until channel is closed or error is received
	err := <-errs
	if err != nil {
		return nil, err
	}

	return secrets, nil
}
