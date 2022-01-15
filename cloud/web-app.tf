resource "google_storage_bucket" "web_app" {
  name          = "homepage-338312_app"
  location      = "US-EAST1"
  force_destroy = true

  uniform_bucket_level_access = true

  website {
    main_page_suffix = "index.html"
    not_found_page   = "index.html"
  }
  cors {
    origin          = ["http://image-store.com"]
    method          = ["GET", "HEAD", "PUT", "POST", "DELETE"]
    response_header = ["*"]
    max_age_seconds = 3600
  }
}

resource "google_storage_bucket_iam_binding" "all_users" {
  bucket = google_storage_bucket.web_app.name
  role = "roles/storage.objectViewer"
  members = [
    "allUsers",
  ]
}

resource "google_storage_bucket_iam_binding" "cloud_build" {
  bucket = google_storage_bucket.web_app.name
  role = "roles/storage.objectAdmin"
  members = [
    "serviceAccount:181624353136-compute@developer.gserviceaccount.com",
  ]
}