package connectors

import (
	"fmt"

	"github.com/stephan-wittig/homepage/api/models"
)

func SendEmail(m models.Message) error {
	fmt.Printf("%+v", m)
	return nil
}
