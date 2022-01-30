package handlers

import (
	"reflect"
	"strings"

	"github.com/go-playground/locales/en"
	ut "github.com/go-playground/universal-translator"
	"github.com/go-playground/validator/v10"
	en_translations "github.com/go-playground/validator/v10/translations/en"
	"github.com/stephan-wittig/homepage/api/connectors"
)

type Handlers struct {
	validator   *validator.Validate
	translator  *ut.UniversalTranslator
	emailClient *connectors.EmailClient
}

func New() (Handlers, error) {
	validate := validator.New()
	validate.RegisterTagNameFunc(func(fld reflect.StructField) string {
		name := strings.SplitN(fld.Tag.Get("json"), ",", 2)[0]
		if name == "-" {
			return ""
		}
		return name
	})

	en := en.New()
	uni := ut.New(en, en)
	trans, _ := uni.GetTranslator("en")
	en_translations.RegisterDefaultTranslations(validate, trans)

	emailClient, err := connectors.NewEmailClient()
	if err != nil {
		return Handlers{}, err
	}

	return Handlers{
		validator:   validate,
		translator:  uni,
		emailClient: &emailClient,
	}, nil
}
