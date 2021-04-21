type LocalStorageAvailableKeys = 'colorMode';

export default {
  getLocalStorageValue(key: LocalStorageAvailableKeys) {
    if (!window) return null;
    return window.localStorage.getItem(key);
  },
  setLocalStorageKey(key: LocalStorageAvailableKeys, value: string) {
    if (window) {
      window.localStorage.setItem(key, value);
    }
  },
};
