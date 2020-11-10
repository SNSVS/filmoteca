import refs from './refs.js';
import studentsData from './students';
import studetnOneCardTpl from '../templates/student.hbs';

refs.movies.addEventListener('click', oneStudetnCardHandler);

function oneStudetnCardHandler(e) {
  console.log('studentData', studentsData);
  if (e.target === e.currentTarget) {
    console.log(e.target);
    console.log(e.currentTarget);
  } else {
    let id = e.target.id;
    const targetStudetnArray = studentsData.find(function (student) {
      return student.id === 1;
    });
    const oneStudentMarkap = studetnOneCardTpl(targetStudetnArray);
    refs.movies.innerHTML = oneStudentMarkap;
    console.log(oneStudentMarkap);
  }
}
