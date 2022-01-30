package connectors

import (
	"context"
	"fmt"

	"github.com/stephan-wittig/homepage/api/models"
)

type EmailClient struct {
	host     string
	username string
	password string
	from     string
	to       string
}

func NewEmailClient() (EmailClient, error) {
	ctx := context.Background()
	sm, err := NewSecretManager(ctx)
	if err != nil {
		return EmailClient{}, err
	}

	config, err := sm.GetSecrets(ctx, []string{
		"EMAIL_HOST",
		"EMAIL_USERNAME",
		"EMAIL_PASSWORD",
		"EMAIL_FROM",
		"EMAIL_TO",
	})
	if err != nil {
		return EmailClient{}, err
	}

	fmt.Printf("Got all the secrets, eg EMAIL_USERNAME: '%s'\n", config["EMAIL_USERNAME"])

	return EmailClient{
		host:     config["EMAIL_HOST"],
		username: config["EMAIL_USERNAME"],
		password: config["EMAIL_PASSWORD"],
		from:     config["EMAIL_FROM"],
		to:       config["EMAIL_TO"],
	}, nil
}

func (ec *EmailClient) SendEmail(m models.Message) error {
	fmt.Printf("%+v", m)
	return nil
}
