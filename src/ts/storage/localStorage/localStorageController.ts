function getDataFromLocalStorage<T>(key: string): T | null {
  const data: string | null = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
}

function setDataFromLocalSrorage<T>(key: string, data: T): void {
  localStorage.setItem(key, JSON.stringify(data));
}

export { getDataFromLocalStorage, setDataFromLocalSrorage };
