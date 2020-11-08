import template from "../templates/movie.hbs"
import refs from './refs';

function renderTemplateListMovies(data)  {
  const movieTemplate = template(data);
  refs.movies.innerHTML = movieTemplate;
};

export default renderTemplateListMovies;
