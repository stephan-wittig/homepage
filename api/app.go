package main

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/stephan-wittig/homepage/api/handlers"
)

type App struct {
	Router *mux.Router
	port   uint64
}

func (a *App) Initialize() {
	r := mux.NewRouter()
	r.HandleFunc("/contact", handlers.Contact)

	a.Router = r
}

func (a *App) Run() {
	http.ListenAndServe(":80", a.Router)
}
