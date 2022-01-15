resource "google_compute_instance" "web_server" {
  name         = "web-server"
  machine_type = "e2-micro"

  desired_status = "TERMINATED"

  boot_disk {
    initialize_params {
      image = "ubuntu-minimal-2110-impish-v20220111"
    }
  }

  network_interface {
    # A default network is created for all GCP projects
    network = "default"
    access_config {
    }
  }
}
