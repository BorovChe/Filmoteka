function getDataFromSessionStorage<T>(key: string): T | null {
  const data: string | null = sessionStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
}

function setDataFromSessionSrorage<T>(key: string, data: T): void {
  sessionStorage.setItem(key, JSON.stringify(data));
}

export { getDataFromSessionStorage, setDataFromSessionSrorage };
