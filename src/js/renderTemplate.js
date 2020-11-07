
function renderTemplate(data, template, place)  {
  const movieTemplate = template(data);
  place.innerHTML = movieTemplate;
};

export default renderTemplate;
