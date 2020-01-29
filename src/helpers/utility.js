export const sessionStorageAddItem = (key, item) => {
  let current = sessionStorage.getItem(key)
    ? JSON.parse(sessionStorage.getItem(key))
    : [];

  const updated = [...current, item];
  sessionStorage.setItem(key, JSON.stringify(updated));
};

export const getSessionStorageItem = key => {
  let result = sessionStorage.getItem(key)
    ? JSON.parse(sessionStorage.getItem(key))
    : [];

  return result;
};

export const setSessionStorageItem = (key, value) => {
  sessionStorage.removeItem(key);
  sessionStorage.setItem(key, JSON.stringify(value));
};
