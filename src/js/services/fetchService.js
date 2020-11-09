import spinner from '../spinner';

const fetchService = url => {
  spinner.start();
  return fetch(url)
    .then(res => res.json())
    .catch(error => console.log(error.message))
    .finally(() => spinner.stop());
};

export default fetchService;
