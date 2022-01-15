resource "google_app_engine_application" "web_app" {
  location_id = "us-east1"
}

resource "google_project_iam_binding" "cloud_builder_app_engine" {
  project = "homepage-338312"
  role    = "roles/appengine.appAdmin"

  members = [
    "serviceAccount:181624353136@cloudbuild.gserviceaccount.com",
  ]
}

resource "google_project_iam_binding" "cloud_builder_storage" {
  project = "homepage-338312"
  role    = "roles/storage.objectAdmin"

  members = [
    "serviceAccount:181624353136@cloudbuild.gserviceaccount.com",
  ]
}

data "google_app_engine_default_service_account" "default" {
}

resource "google_service_account_iam_binding" "admin-account-iam" {
  service_account_id = data.google_app_engine_default_service_account.default.name
  role               = "roles/iam.serviceAccountUser"

  members = [
    "serviceAccount:181624353136@cloudbuild.gserviceaccount.com",
  ]
}
