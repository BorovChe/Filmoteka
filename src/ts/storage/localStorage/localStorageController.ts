function getDataFromLocalStorage<T>(key: string): T[] | [] {
  const data: string | null = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return [];
}

function setDataFromLocalSrorage<T>(key: string, data: T): void {
  localStorage.setItem(key, JSON.stringify(data));
}

export { getDataFromLocalStorage, setDataFromLocalSrorage };
