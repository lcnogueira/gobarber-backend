# GoBarber API

[![buddy pipeline](https://app.buddy.works/luizcns18/gobarber-backend/pipelines/pipeline/211347/badge.svg?token=71850eb71664e83fd61b8722a90a72e81b3eb645e4e6b5546f37bac719167aa0 "buddy pipeline")](https://app.buddy.works/luizcns18/gobarber-backend/pipelines/pipeline/211347)

Backend for the GoBarber application.

## API Endpoints

The following endpoints are available

| Endpoints       | Usage          | Params         |
|-----------------|----------------|----------------|
`POST /sessions` | Create a new session | **email** - [String] <br> **password** - [String] |
`POST /users` | Create a new user | **name** - [String] <br> **email** - [String] <br> **password** - [String] <br> **provider** - [Boolean] |
`PUT /users` | Edit an existing user | **name** - [String] <br> **email** - [String]  <br> **oldPassword** - [String] <br> **password** - [String] <br> **confirmPassword** - [String] <br> **avatar_id** - [Numeric] |
`GET /providers` | Get all of the providers | |
`GET /appointments` | Get all of the appointments | |
`POST /appointments` | Create a new appointment | **provider_id** - [Numeric] <br> **date** - [Date] |
`DELETE /appointments/:id` | Set the `canceled_at` flag to the current date | |
`GET /schedule` | Get the schedule for the logged in user | |
`GET /notifications` | Get all of the notifications for the logged in user | |
`PUT /notifications/:id` | Set the `read` flag to `true` | |
`GET /providers/id/available` | Get the available schedule of the provider whose `provider_id` === `id` | |

