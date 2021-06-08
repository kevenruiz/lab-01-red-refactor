/* eslint-disable keyword-spacing */
export default (arr) => {
  const cap = arr.filter(booger =>
    (booger[0] !== 'F') && (booger[0] !== 'f'));
  const upperCap = cap.map(booger =>
    booger.toUpperCase());


  return upperCap;

};
