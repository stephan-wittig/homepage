package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/go-playground/validator/v10"
	gorilla_handlers "github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/stephan-wittig/homepage/api/handlers"
)

type App struct {
	Router    *mux.Router
	handlers  handlers.Handlers
	port      string
	validator *validator.Validate
}

func (a *App) Initialize() error {
	log.Printf("Initializing app")

	port, exists := os.LookupEnv("PORT")
	if !exists {
		port = "8080"
		log.Printf("EnvVar PORT not found. Using default")
	}
	a.port = port
	log.Printf("Using port %s", port)

	var err error
	a.handlers, err = handlers.New()
	if err != nil {
		return err
	}
	log.Printf("Initialized handlers")

	r := mux.NewRouter()
	cors := gorilla_handlers.CORS(
		gorilla_handlers.AllowedHeaders([]string{"Content-Type"}),
		gorilla_handlers.AllowedMethods([]string{http.MethodPost, http.MethodGet}),
	)
	r.Use(cors)

	r.Methods(http.MethodGet, http.MethodOptions).Path("/api/health").HandlerFunc(a.handlers.Health)
	r.Methods(http.MethodPost, http.MethodOptions).Path("/api/contact").HandlerFunc(a.handlers.Contact)

	a.Router = r
	log.Printf("Initialized router")

	return nil
}

func (a *App) Run() {
	err := http.ListenAndServe(fmt.Sprintf(":%s", a.port), a.Router)
	log.Fatal(err)
}
