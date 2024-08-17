function findIndexMovie(movielist: any, targetId: any) {
  return movielist.findIndex(({ id }: any) => String(id) === targetId);
}

function someFunctionMovie(movielist: any, string: any) {
  return movielist.some(({ id }: any) => String(id) === string);
}

export { findIndexMovie, someFunctionMovie };
