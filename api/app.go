package main

import (
	"log"
	"net/http"
	"os"

	"github.com/go-playground/validator/v10"
	"github.com/gorilla/mux"
	"github.com/stephan-wittig/homepage/api/handlers"
)

type App struct {
	Router    *mux.Router
	handlers  handlers.Handlers
	port      uint64
	validator *validator.Validate
}

func (a *App) Initialize() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
		log.Printf("Defaulting to port %s", port)
	}

	a.handlers = handlers.New()

	r := mux.NewRouter()
	r.HandleFunc("/contact", a.handlers.Contact)

	a.Router = r
}

func (a *App) Run() {
	err := http.ListenAndServe(":80", a.Router)
	log.Fatal(err)
}
