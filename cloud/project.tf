provider "google" {
  project = "homepage-338312"
  region  = "us-east1"
  zone    = "us-east1-c"
}

resource "google_project_service" "compute" {
  service = "compute.googleapis.com"

  disable_dependent_services = true
  disable_on_destroy         = true
}

resource "google_project_service" "resource_manager" {
  service = "cloudresourcemanager.googleapis.com"

  disable_dependent_services = true
  disable_on_destroy         = true
}


resource "google_project_service" "cloud_build" {
  service = "cloudbuild.googleapis.com"

  disable_dependent_services = true
  disable_on_destroy         = true
}

resource "google_project_service" "app_engine" {
  service = "appengine.googleapis.com"

  disable_dependent_services = true
  disable_on_destroy         = true
}

resource "google_project_service" "iam" {
  service = "iam.googleapis.com"

  disable_dependent_services = true
  disable_on_destroy         = true
}

resource "google_project_service" "secret_manager" {
  service = "secretmanager.googleapis.com"

  disable_dependent_services = true
  disable_on_destroy         = true
}
