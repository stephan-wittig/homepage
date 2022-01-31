resource "google_app_engine_application" "web_app" {
  location_id = "us-east1"
}

data "google_app_engine_default_service_account" "default" {
}

resource "google_storage_bucket" "appengine" {
  name          = "us.artifacts.${var.project_id}.appspot.com "
  location      = "US-EAST1"
  
  force_destroy = true
  uniform_bucket_level_access = true
}

resource "google_app_engine_domain_mapping" "stephan_tech" {
  domain_name = "stephan.tech"

  ssl_settings {
    ssl_management_type = "AUTOMATIC"
  }
}

resource "google_project_iam_binding" "cloud_builder_app_engine" {
  project = var.project_id
  role    = "roles/appengine.appAdmin"

  members = [
    "serviceAccount:${local.cloudbuild_sa}",
  ]
}

resource "google_project_iam_binding" "cloud_builder_storage" {
  project = var.project_id
  role    = "roles/storage.objectAdmin"

  members = [
    "serviceAccount:${local.cloudbuild_sa}",
  ]
}

resource "google_service_account_iam_binding" "cloud_builder_appengine_sa" {
  service_account_id = data.google_app_engine_default_service_account.default.name
  role               = "roles/iam.serviceAccountUser"

  members = [
    "serviceAccount:${local.cloudbuild_sa}",
  ]
}
