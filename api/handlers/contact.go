package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/go-playground/validator/v10"
	"github.com/stephan-wittig/homepage/api/models"
)

func (h *Handlers) Contact(w http.ResponseWriter, r *http.Request) {
	var m models.Message

	err := json.NewDecoder(r.Body).Decode(&m)
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnprocessableEntity)
		return
	}

	err = h.validator.Struct(m)
	if err != nil {
		errs := err.(validator.ValidationErrors)
		trans, _ := h.translator.GetTranslator("en")

		w.WriteHeader(http.StatusUnprocessableEntity)
		json.NewEncoder(w).Encode(errs.Translate(trans))
		return
	}

	err = h.emailClient.SendEmail(m)
	if err != nil {
		http.Error(w, "Internal Server Error. Please try again later", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
}
