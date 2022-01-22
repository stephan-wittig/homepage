package models

type Message struct {
	Content     string `json:"content" validate:"required,min=2,max=512"`
	SenderEmail string `json:"senderEmail" validate:"required,email"`
	Subject     string `json:"subject" validate:"required,min=2,max=64"`
}
