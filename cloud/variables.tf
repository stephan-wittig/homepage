locals {
  email_secret_ids = toset([
    "EMAIL_HOST",
    "EMAIL_USERNAME",
    "EMAIL_PASSWORD",
    "EMAIL_FROM",
    "EMAIL_TO"
  ])
}
