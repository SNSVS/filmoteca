import onefilmTpl from '../templates/onefilm.hbs';

const apiKey = '0582d3f510963f6ac84a3c592afe6834';
// const id = 12763
// const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`;



const cardsList = document.querySelector('.one-movie');

const moviesList = document.querySelector('.js-movies__list');
moviesList.addEventListener('click', (e)=>{
    if(e.target.nodeName !== "IMG") {
        return;
    }
    let id = +e.target.id
    const baseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
    fetch(baseUrl)
.then(res => res.json())
.then(data => {
    let markap = onefilmTpl(data)
    cardsList.innerHTML = markap;
    moviesList.innerHTML = ''

    // ===================================
    const watchedBtn = document.querySelector('.watched-js');
    const localeWatchedValueArray = []
    watchedBtn.addEventListener('click', (e)=>{
        const newValues = JSON.parse(localStorage.getItem('watched'))
        if(newValues !== null) {
        if(newValues.length > 0) {
            const isCurrentFilm = newValues.some(newValues => {
            console.log(newValues.id);
            console.log('id ',id);
            newValues.id === id})
            console.log(isCurrentFilm);
        }}
        
        localeWatchedValueArray.push(...newValues)
        console.log(localeWatchedValueArray.lenght);
        
        localeWatchedValueArray.push(data)
        console.log(localeWatchedValueArray);

        localStorage.setItem('watched', JSON.stringify(localeWatchedValueArray))
        localeWatchedValueArray.splice(0)
        

        
    })
})
})