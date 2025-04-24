function isLocalStorageAvailable() {
  try {
    const testKey = "__test__";
    window.localStorage.setItem(testKey, testKey);
    window.localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

export function getItem(key: string) {
  try {
    if (!isLocalStorageAvailable()) {
      console.warn("Local storage is not available");
      return undefined;
    }

    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  } catch (error) {
    console.warn(error);
  }
}

export function setItem(key: string, value: unknown) {
  try {
    if (!isLocalStorageAvailable()) {
      console.warn("Local storage is not available");
      return;
    }
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(error);
  }
}
