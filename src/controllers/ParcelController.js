// * Followed the logic of a tutorial on mentor.io */
import moment from 'moment';
import uuidv4 from 'uuid/v4';
import db from '../database';
import Parcel from '../model/parcel';

const Parcels = {
  // Create a parcel delivery order
  async create(req, res) {
    const {
      location,
      destination,
      presentLocation,
      weight,
    } = req.body;
    const newParcel = new Parcel(uuidv4(), location, destination, presentLocation, weight,
      req.user.id, 'Pending', moment(new Date()), moment(new Date()));
    const createQuery = `INSERT INTO
      parcels(id, location, destination ,present_location, weight, owner_id, status, created_date, modified_date)
      VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
      returning *`;

    try {
      const {
        rowCount,
        rows,
      } = await db.query(createQuery, Object.values(newParcel));
      return res.status(201).send({
        message: 'Parcel Created Successfully',
        status: 201,
        rowCount,
        data: rows[0],
      });
    } catch (error) {
      return res.status(400).send({
        message: error,
        status: 400,
      });
    }
  },
  // Fetch all parcel delivery orders
  async getAll(req, res) {
    const findAllQuery = 'SELECT * FROM parcels';
    try {
      const {
        rows,
        rowCount,
      } = await db.query(findAllQuery);
      return res.status(200).send({
        message: 'Success',
        status: 200,
        rowCount,
        data: rows,
      });
    } catch (error) {
      return res.status(400).send({
        message: error,
      });
    }
  },
  // Fetch all parcel delivery orders by a specific user
  async parcelByUser(req, res) {
    const parcelByUserQuery = 'SELECT * FROM parcels WHERE owner_id = $1';
    try {
      const {
        rows,
        rowCount,
      } = await db.query(parcelByUserQuery, [req.params.userId]);
      return res.status(200).send({
        message: 'Success',
        status: 200,
        rowCount,
        data: rows[0],
      });
    } catch (error) {
      return res.status(400).send({
        message: error,
        status: 400,
      });
    }
  },
  // Fetch a specific parcel delivery order
  async getOne(req, res) {
    const text = 'SELECT * FROM parcels WHERE id = $1';
    try {
      const {
        rows,
        rowCount,
      } = await db.query(text, [req.params.parcelId]);
      if (!rows[0]) {
        return res.status(404).send({
          message: 'parcels not found',
          status: 404,
        });
      }
      return res.status(200).send({
        message: 'Success',
        status: 200,
        rowCount,
        data: rows[0],
      });
    } catch (error) {
      return res.status(400).send({
        message: error,
        status: 400,
      });
    }
  },
  // Cancel the specific parcel delivery order
  async cancel(req, res) {
    const updateOneQuery = `UPDATE parcels
      SET status=$1,modified_date=$2
      WHERE id=$3 returning *`;

    const updateValues = [
      'Cancelled',
      moment(new Date()),
      req.params.parcelId,
    ];

    try {
      const response = await db.query(updateOneQuery, updateValues);
      if (response.rowCount > 0) {
        return res.status(200).send({
          message: 'Success',
          status: 200,
          data: response.rows[0],
        });
      }
      return res.status(404).send({
        message: 'Order not cancelled',
      });
    } catch (err) {
      return res.status(400).send({
        message: 'Bad request',
      });
    }
  },
  // Change the present location of a specific parcel delivery order
  async ChangePresentLocation(req, res) {
    const updateOneQuery = `UPDATE parcels
      SET present_location=$1,modified_date=$2
      WHERE id=$3 returning *`;

    const updateValues = [
      req.body.present_location,
      moment(new Date()),
      req.params.parcelId,
    ];

    try {
      const response = await db.query(updateOneQuery, updateValues);
      if (response.rowCount > 0) {
        return res.status(200).send({
          message: 'Success',
          status: 200,
          data: response.rows[0],
        });
      }
      return res.status(404).send({
        message: 'Location not changed',
      });
    } catch (err) {
      return res.status(400).send({
        message: 'Bad request',
      });
    }
  },
  async changeDestination(req, res) {
    const updateOneQuery = `UPDATE parcels
    SET destination=$1,modified_date=$2
    WHERE id=$3 returning *`;

    const updateValues = [
      req.body.destination,
      moment(new Date()),
      req.params.parcelId,
    ];

    try {
      const response = await db.query(updateOneQuery, updateValues);
      if (response.rowCount > 0) {
        return res.status(200).send({
          message: 'Success',
          status: 200,
          data: response.rows[0],
        });
      }
      return res.status(404).send({
        message: 'Destination not changed',
      });
    } catch (err) {
      return res.status(400).send({
        message: 'Bad request',
        reque: req.body,
      });
    }
  },
  async changeStatus(req, res) {
    const updateOneQuery = `UPDATE parcels
    SET status=$1,modified_date=$2
    WHERE id=$3 returning *`;

    const updateValues = [
      req.body.status,
      moment(new Date()),
      req.params.parcelId,
    ];

    try {
      const response = await db.query(updateOneQuery, updateValues);
      if (response.rowCount > 0) {
        return res.status(200).send({
          message: 'Success',
          status: 200,
          data: response.rows[0],
        });
      }
      return res.status(404).send({
        message: 'Status not changed',
      });
    } catch (err) {
      return res.status(400).send({
        message: 'Bad request',
      });
    }
  },
};

export default Parcels;