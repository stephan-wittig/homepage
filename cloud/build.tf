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
