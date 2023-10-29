// set value in local storage
const setValueInLocalStorage = (keyName, strValue) => {
  const value = localStorage.setItem(keyName, strValue);
  return value;
};
const getValue = (strValue) => {
  return localStorage.getItem(strValue);
};
export { setValueInLocalStorage, getValue };
