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

	// Create the client.
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
	// Create the request to create the secret.
	accVersionReq := &secretmanagerpb.AccessSecretVersionRequest{
		Name: fmt.Sprintf("projects/%s/versions/%s/latest", sm.project, id),
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

	go func(wg sync.WaitGroup, errs chan error) {
		wg.Wait()
		close(errs)
	}(wg, errs)

	for _, id := range ids {
		go func(id string) {
			defer wg.Done()
			secret, err := sm.GetSecret(ctx, id)
			if err != nil {
				return
			}

			secrets[id] = secret
		}(id)
	}

	err := <-errs
	if err != nil {
		return nil, err
	}

	return secrets, nil
}
