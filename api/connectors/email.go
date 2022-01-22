package connectors

import (
	"fmt"

	"github.com/stephan-wittig/homepage/api/models"
)

func Send(m models.Message) {
	fmt.Printf("%+v", m)
}
