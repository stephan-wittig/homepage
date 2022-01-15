resource "google_app_engine_application" "web_app" {
  location_id = "us-east1"
}

resource "google_project_iam_binding" "cloud_builder_app_engine" {
  role    = "roles/appengine.deployer"

  members = [
    "serviceAccount:181624353136@cloudbuild.gserviceaccount.com",
  ]
}