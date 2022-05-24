# Homepage Backend

This is the Go backend for my homepage. Curently, it only has the `/contact` endpoint, that sends an email to myself.

A `/health` endpoint is provided, too, to check the validity of the configuration.

The following environment variables are required:

```
  PORT
  SENDING_EMAIL
  RECEIVING_EMAIL
  EMAIL_SERVER_ADDRESS
  EMAIL_SERVER_USERNAME
  EMAIL_SERVER_PASSWORD
```