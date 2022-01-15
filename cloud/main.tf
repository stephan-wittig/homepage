terraform {
  cloud {
    organization = "steph"
    workspaces {
      tags = ["app"]
    }
  }
}