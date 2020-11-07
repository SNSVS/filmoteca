import moviesQueryOptions from './moviesQueryOptions';

const fetchWithQueryService = (page="") => {
  const url = page ?
    `${moviesQueryOptions.BASE_URL}api_key=${moviesQueryOptions.API_KEY}&page=${page}`:
    `${moviesQueryOptions.BASE_URL}api_key=${moviesQueryOptions.API_KEY}`;
  console.log(url);

  return fetch(url).then(res => res.json()).catch(error => console.log(error.message));
}

export default fetchWithQueryService;
