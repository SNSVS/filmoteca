import genreNames from "../../data/genres"

const handleMoviesMiddleWare = (movies) => {
  return movies.map(item => {
    item = {
      ...item,
      release_date: new Date(item.release_date).getFullYear(),
      genres: genreNames
        .filter(({ id }) => item.genre_ids.findIndex(item => item === id) !== -1)
        .map(({name}) => name),
    }
    return item;
  })
}

export default handleMoviesMiddleWare;
