locals {
  email_secret_ids = toSet([
    "EMAIL_HOST",
    "EMAIL_USERNAME",
    "EMAIL_PASSWORD",
    "EMAIL_FROM",
    "EMAIL_TO"
  ])
}
