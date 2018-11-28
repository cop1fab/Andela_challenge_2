import Express from 'express';
// import allParcels from './models/data.json';
import parcelRouters from './routers/parcels';

const server = Express();
server.use(Express.json());

server.use('/api/v1', parcelRouters);

const port = process.env.PORT || 9092;
// eslint-disable-next-line no-console
server.listen(port, () => console.log('server started successfuly listening on port 9091'));

export default server;
