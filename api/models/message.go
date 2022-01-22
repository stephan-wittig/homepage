package models

type Message struct {
	Content     string `json:"content"`
	SenderEmail string `json:"senderEmail"`
	Subject     string `json:"subject"`
}
