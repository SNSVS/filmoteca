import template from "../templates/onefilm.hbs"
import refs from './refs';

function renderTemplateSingleMovie(data)  {
  const movieTemplate = template(data);
  refs.movies.innerHTML = movieTemplate;
};

export default renderTemplateSingleMovie;
