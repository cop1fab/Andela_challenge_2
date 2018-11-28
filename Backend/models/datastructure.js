import uuid from 'uuid';

import allParcels from './data.json';


const getParcelById = (parcelId) => {
  const parcel = allParcels.find(p => p.parcelId === parcelId);
  // console.log(allParcels);
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
  let parcel;
  allParcels.forEach((value, index) => {
    if (value.ParcelId === parcelId) {
      parcel = allParcels[index];
    }
  });
  if (parcel.status) {
    parcel.status = 'canceled';
    return parcel;
  }
  return 'Parcel not found!';
};

const uniqueId = () => uuid.v4();

const postParcels = (body) => {
  const newParcel = {
    ...body,
    ParcelId: allParcels.length,
  };
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
