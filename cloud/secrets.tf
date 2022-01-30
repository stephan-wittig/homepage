resource "google_secret_manager_secret" "email_secrets" {
  for_each = local.email_secret_ids

  secret_id = each.key

  replication {
    automatic = true
  }
}

resource "google_secret_manager_secret_iam_binding" "binding" {
  for_each = google_secret_manager_secret.email_secrets

  secret_id = each.value.secret_id
  role      = "roles/secretmanager.secretAccessor"
  members = [
    "serviceAccount:181624353136@cloudbuild.gserviceaccount.com",
  ]
}
