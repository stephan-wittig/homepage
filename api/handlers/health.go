package handlers

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/stephan-wittig/homepage/api/models"
)

func (h *Handlers) Health(w http.ResponseWriter, r *http.Request) {
	allOk := true
	var emailStatus string

	emailErr := h.emailClient.CheckAuth()
	if emailErr != nil {
		allOk = false
		emailStatus = ":("
		log.Printf("Authentication to email server failed: %s", emailErr.Error())
	} else {
		emailStatus = "OK"
	}

	if allOk {
		w.WriteHeader(http.StatusOK)
	} else {
		w.WriteHeader(http.StatusInternalServerError)
	}

	json.NewEncoder(w).Encode(models.HealthResponse{
		Email: emailStatus,
	})
}
