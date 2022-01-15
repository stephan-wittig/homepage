resource "google_cloudbuild_trigger" "deploy_website" {
  name     = "deploy-website"
  filename = "ci/cloudbuild.yaml"

  github {
    owner = "stephan-wittig"
    name  = "homepage"

    push {
      branch = "^main$"
    }
  }
}
