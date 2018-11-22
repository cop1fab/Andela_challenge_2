import uuid from 'uuid';

import allParcels from './data.json';


const getParcelById = (parcelId) => {
  const parcel = allParcels.find(p => p.ParcelId === Number.parseInt(parcelId, 10));
  return parcel;
};

const getParcelsByUserId = (userId) => {
  const tempParcels = [];
  allParcels.forEach((parcel) => {
    if (parcel.UserId === userId) {
      tempParcels.push(parcel);
    }
  });
  return tempParcels;
};

const cancelParcelsById = (parcelId) => {
  let tempIndex;
  allParcels.forEach((value, index) => {
    if (value.ParcelId === parcelId) {
      tempIndex = index;
    }
  });
  allParcels.splice(tempIndex, 1);
  return allParcels;
};

const uniqueId = () => uuid.v4();

const postParcels = (body) => {
  const newParcel = { ...body, ParcelId: uniqueId() };
  allParcels.push(newParcel);
  return allParcels;
};

// export default allParcels;

export {
  getParcelById,
  getParcelsByUserId,
  cancelParcelsById,
  postParcels,
};
