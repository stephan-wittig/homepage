package handlers

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func Contact(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "Category: %v\n", vars["category"])
}
