[![Build Status](https://travis-ci.org/cop1fab/Andela_challenge_2.svg?branch=api)](https://travis-ci.org/cop1fab/Andela_challenge_2)

[![Coverage Status](https://coveralls.io/repos/github/cop1fab/Andela_challenge_2/badge.svg?branch=api)](https://coveralls.io/github/cop1fab/Andela_challenge_2?branch=api)

[![Maintainability](https://api.codeclimate.com/v1/badges/660bb1f30366afbdd0d5/maintainability)](https://codeclimate.com/github/cop1fab/Andela_challenge_2/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/660bb1f30366afbdd0d5/test_coverage)](https://codeclimate.com/github/cop1fab/Andela_challenge_2/test_coverage)

SendIT: SendIT is a courier service that helps users deliver parcels to different destinations. SendIT
provides courier quotes based on weight categories.

Introduction: 

This document provides guidelines and examples for Parcel Delivery APIs, encouraging consistency, maintainability, and best practices across applications. Parcel Delivery APIs aim to balance a truly RESTful API interface with a positive developer experience.

HTTP Verbs

Type of methods
GET | POST | PUT

Endpoints
Fetch all parcel delivery orders
GET /api/v1/parcles/

Fetch a specific parcel delivery order
GET /api/v1/parcles/:id

Fetch all parcel delivery orders by a specific user
GET /api/v1/users/:id/parcels

Cancel the specific delivery order
PUT /api/v1/parcels/:id/cancel

Create a parcel delivery order
POST /api/v1/parcels/


