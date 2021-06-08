/* eslint-disable keyword-spacing */
export default (arr) => {
  const cap = [];
  for (const booger of arr) {
    if ((booger[0] !== 'F') && (booger[0] !== 'f')) {
      cap.push(booger.toUpperCase());


    }


  }
  return cap;
};
