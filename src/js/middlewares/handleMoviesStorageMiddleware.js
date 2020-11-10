const handleMoviesStorageMiddleWare = movies => {
  return movies.map(item => {
    item = {
      ...item,
      release_date: new Date(item.release_date).getFullYear(),
      genres: item.genres.map(({ name }) => name),
    };
    return item;
  });
};

export default handleMoviesStorageMiddleWare;
