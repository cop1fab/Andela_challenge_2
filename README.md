SendIT is a courier service that helps users deliver parcels to different destinations. SendIT provides courier quotes based on weight categories.

EndPoint	Functionality
GET /api/v1/parcels	Fetch all parcel delivery orders
GET /api/v1/parcels/<parcelId>	Fetch a specific parcel delivery order
GET /api/v1/users/<userId>/parcels	Fetch all parcel delivery orders by a specific user
POST /api/v1/parcels	Create a parcel delivery order
POST /api/v1/auth/login	Login
POST /api/v1/auth/signup	Sign Up
PUT /api/v1/parcels/<parcelId>/cancel	Cancel the specific parcel delivery order
PUT /api/v1/parcels/:parcelId/presentLocation	Change the present location of a specific parcel
PUT /api/v1/parcels/:parcelId/destination	Change the location of a specific parcel delivery order
PUT /api/v1/parcels/:parcelId/status	Change the status of a specific parcel delivery order
DELETE /api/v1/users/delete	Delete a user

User Interface: https://cop1fab.github.io/Andela_challenge_2/ui/html/index.html
