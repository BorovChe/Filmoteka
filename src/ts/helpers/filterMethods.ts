function findIndexMovie(movielist: any, id: any) {
  return movielist.findIndex((item: any) => String(item) === id);
}

function someFunctionMovie(movielist: any, id: any) {
  return movielist.some((item: any) => String(item) === id);
}

export { findIndexMovie, someFunctionMovie };
