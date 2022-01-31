provider "google" {
  project = var.project_id
  region  = "us-east1"
  zone    = "us-east1-c"
}

resource "google_project_service" "apis" {
  for_each = local.enabled_apis
  service  = each.key

  disable_dependent_services = true
  disable_on_destroy         = true
}

data "google_project" "this" {
}