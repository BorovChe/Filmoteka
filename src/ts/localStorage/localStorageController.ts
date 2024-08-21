function getDataFromLocalStorage(key: string): any | [] {
  const data: any = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return [];
}

function setDataFromLocalSrorage(key: string, data: any): void {
  localStorage.setItem(key, JSON.stringify(data));
}

export { getDataFromLocalStorage, setDataFromLocalSrorage };
