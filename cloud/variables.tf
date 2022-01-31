variable "project_id" {
  type = string
}

locals {
  enabled_apis = toset([
    "appengine.googleapis.com",
    "cloudbuild.googleapis.com",
    "cloudresourcemanager.googleapis.com",
    "iam.googleapis.com",
    "secretmanager.googleapis.com"
  ])

  email_secret_ids = toset([
    "EMAIL_HOST",
    "EMAIL_PORT",
    "EMAIL_USERNAME",
    "EMAIL_PASSWORD",
    "EMAIL_FROM",
    "EMAIL_TO"
  ])

  cloudbuild_sa = "${google_project.this.number}@cloudbuild.gserviceaccount.com"
  appengine_sa  = data.google_app_engine_default_service_account.default.email
}
