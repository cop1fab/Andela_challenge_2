import allParcels from "./data.json"

const getParcelById = (parcelId) => {
  const parcel = allParcels.find(parcel => parcel.parId === Number.parseInt(req.params.parid, 10));
    return parcel;
}
const getParcelsByUserId = (userId) => {
const tempParcels = []
  allParcels.forEach((parcel) => {
    if (parcel.usId === userId) {
      tempParcels.push(parcel);
    }
  });
return tempParcels;
}
const putParcelsById = (parcelId) => {
  let tempIndex;
  allParcels.forEach((value, index) => {
    if (value.parId === parcelId) {
      tempIndex = index;
    }
  });
  allParcels.splice(tempIndex, 1);
  return allParcels;
}
// This line of code about unique Id used is from http://www.frontcoded.com/javascript-create-unique-ids.html
const uniqueId = function() {
return 'id-'+ Math.random().toString(36).substr(2,16);
};

const postParcels = (body) => {
  const newParcel = { ...body, parId: uniqueId() };
  allParcels.push(newParcel);
  return allParcels;
}

export default allParcels;

export {
  getParcelById,
  getParcelsByUserId,
  putParcelsById,
  postParcels,
}

