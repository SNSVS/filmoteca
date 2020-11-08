import template from "../templates/movie.hbs"
import refs from './refs';

function renderTemplate(data)  {
  const movieTemplate = template(data);
  refs.movies.innerHTML = movieTemplate;
};

export default renderTemplate;
