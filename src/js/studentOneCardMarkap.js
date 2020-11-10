import refs from './refs.js';
import studentsData from '../data/students';
import studetnOneCardTpl from '../templates/student.hbs';

// refs.movies.addEventListener('click', oneStudetnCardHandler);

// function oneStudetnCardHandler(e) {
//   setTimeout(() => {
//     if (e.target === e.currentTarget) {
//       return;
//     } else {
//       let id = +e.target.id;
//       console.log();
//       const targetStudetnArray = studentsData.find(function (student) {
//         return student.id === id;
//       });
//       const oneStudentMarkap = studetnOneCardTpl(targetStudetnArray);
//       refs.movies.innerHTML = oneStudentMarkap;
//       refs.movies.addEventListener('click', oneStudetnCardHandler);
//       console.log(oneStudentMarkap);
//     }
//   }, 100);
// }
