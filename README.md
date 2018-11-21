[![Build Status](https://travis-ci.org/cop1fab/Andela_challenge_2.svg?branch=api)](https://travis-ci.org/cop1fab/Andela_challenge_2)

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


