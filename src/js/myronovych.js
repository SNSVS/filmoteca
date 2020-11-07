import onefilmTpl from '../templates/onefilm.hbs'

const single = document.querySelector('.single');

const apiKey = '0582d3f510963f6ac84a3c592afe6834';
const id = 12763
// const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`;
const baseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

fetch(baseUrl)
.then(res => res.json())
.then(data => {
    // console.log(data)
    let markap = onefilmTpl(data)
    single.innerHTML = markap;
    // const watchedBtn = document.querySelector('.watched');
//     watchedBtn.addEventListener('click', ()=>{
//         console.log(localStorage.getItem('key'));
//         const localStorageArray = []
//         localStorageArray.push(JSON.parse(localStorage.getItem('key')))
//         for(let i =0; i<localStorageArray.length; i++) {
//             if(data.id === localStorageArray[i].id) {
//                 console.log(data.id === localStorageArray[i].id);
//                 console.log(localStorage.key[i]);
//                 delete localStorageArray[i]
//             } else {

//             }
//         }
        
            
        
//     localStorage.setItem('key', JSON.stringify(data))

// })
})


const moviesList = document.querySelector('.movies-list');
moviesList.addEventListener('click', (e)=>{
    if(e.target.nodeName !== "IMG") {
        return;
    }
    let id = +e.target.id
})


