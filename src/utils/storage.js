const setlocalStorage = (key, value) => {
  key && localStorage.setItem(key, JSON.stringify(value));
};

const getloaclStorage = (key) => {
  localStorage.getItem(key);
};

const Storage = {
  setlocalStorage,
  getloaclStorage,
};

export { setlocalStorage, getloaclStorage, Storage as default };
