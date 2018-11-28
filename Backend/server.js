import Express from 'express';
// import allParcels from './models/data.json';
import parcelRouters from './routers/parcels';

const server = Express();
server.use(Express.json());
// eslint-disable-next-line no-console
// const appVersion = '/api/v1';

// Endpoint to get a list of all parcels
server.use('/api/v1', parcelRouters);

// Endpoint to get 1 parcel by parcel id

server.use('/api/v1/parcels/:parcelId');

// Endpoint to get all parcels by user id

server.use('/api/v1/users/:userId/parcesl');

// Endpoint to cancel parcel by parcel id

server.use('/api/v1/parcels/:parcelId/cancel');

// Endpoint to create a parcel

server.use('/api/v1/parcels');

const port = process.env.PORT || 8888;
// eslint-disable-next-line no-console
server.listen(port, () => console.log('server started successfuly'));

export default server;
