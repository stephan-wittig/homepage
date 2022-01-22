package main

import (
	"net/http"

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
	a.handlers = handlers.New()

	r := mux.NewRouter()
	r.HandleFunc("/contact", a.handlers.Contact)

	a.Router = r
}

func (a *App) Run() {
	http.ListenAndServe(":80", a.Router)
}
