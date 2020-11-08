const fetchService = (url) => {
  return fetch(url)
    .then(res => res.json())
    .catch(error => console.log(error.message));
}

export default fetchService;
