const firebaseSerializer = (firebaseResponse: object) => {
  let responseValues = Object.values(firebaseResponse);
  const keys = Object.keys(firebaseResponse);

  for (let index in keys) {
    const objKey = keys[index];
    responseValues[index].id = objKey;
  }

  return responseValues;
};

export default firebaseSerializer;
