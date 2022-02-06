package connectors

import (
	"context"
	"crypto/tls"
	"fmt"
	"net/smtp"

	"github.com/stephan-wittig/homepage/api/models"
)

type EmailClient struct {
	host string
	port string
	auth smtp.Auth
	from string
	to   string
}

func NewEmailClient() (EmailClient, error) {
	ctx := context.Background()
	sm, err := NewSecretManager(ctx)
	if err != nil {
		return EmailClient{}, err
	}

	config, err := sm.GetSecrets(ctx, []string{
		"EMAIL_HOST",
		"EMAIL_PORT",
		"EMAIL_USERNAME",
		"EMAIL_PASSWORD",
		"EMAIL_FROM",
		"EMAIL_TO",
	})
	if err != nil {
		return EmailClient{}, err
	}

	auth := smtp.PlainAuth(
		"",
		config["EMAIL_USERNAME"],
		config["EMAIL_PASSWORD"],
		config["EMAIL_HOST"],
	)

	return EmailClient{
		host: config["EMAIL_HOST"],
		port: config["EMAIL_PORT"],
		auth: auth,
		from: config["EMAIL_FROM"],
		to:   config["EMAIL_TO"],
	}, nil
}

func (ec *EmailClient) SendEmail(m models.Message) error {
	msg := fmt.Sprintf("To: %s\r\n", ec.to) +
		fmt.Sprintf("From: %s\r\n", ec.from) +
		fmt.Sprintf("Subject: %s\r\n", m.Subject) +
		fmt.Sprintf("Reply-To: %s\r\n", m.SenderEmail) +
		"\r\n" +
		fmt.Sprintf("The following message was submitted by '%s' on stephan.tech/contact\r\n", m.SenderEmail) +
		"\r\n" +
		fmt.Sprintf("Subject: '%s'\r\n", m.Subject) +
		"\r\n" +
		fmt.Sprintf("%s\r\n", m.Content)

	err := smtp.SendMail(
		fmt.Sprintf("%s:%s", ec.host, ec.port),
		ec.auth,
		ec.from,
		[]string{ec.to},
		[]byte(msg),
	)
	return err
}

func (ec *EmailClient) CheckAuth() error {
	client, err := smtp.Dial(
		fmt.Sprintf("%s:%s", ec.host, ec.port),
	)
	if err != nil {
		return err
	}

	defer client.Close()

	err = client.StartTLS(
		&tls.Config{ServerName: ec.host},
	)
	if err != nil {
		return err
	}

	err = client.Auth(ec.auth)
	return err
}
