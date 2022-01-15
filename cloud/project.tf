provider "google" {
  project = "homepage-338312"
  region  = "us-east1"
  zone    = "us-east1-c"
}

resource "google_project_service" "compute" {
  service = "compute.googleapis.com"

  disable_dependent_services = true
  disable_on_destroy = true
}