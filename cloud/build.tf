resource "google_cloudbuild_trigger" "deploy_website" {
  name     = "deploy-website"
  filename = "website/cloudbuild.yaml"
  included_files = [
    "website/**"
  ]

  github {
    owner = "stephan-wittig"
    name  = "homepage"

    push {
      branch = "^main$"
    }
  }
}

resource "google_cloudbuild_trigger" "deploy_api" {
  name     = "deploy-backend"
  filename = "api/cloudbuild.yaml"
  included_files = [
    "api/**"
  ]

  github {
    owner = "stephan-wittig"
    name  = "homepage"

    push {
      branch = "^main$"
    }
  }
}

resource "google_storage_bucket" "appengine" {
  name          = "us.artifacts.${var.project_id}.appspot.com "
  location      = "US-EAST1"
  
  force_destroy = true
  uniform_bucket_level_access = true
}

