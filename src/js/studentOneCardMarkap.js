import refs from './refs.js';
import studentsData from '../data/students';
import studetnOneCardTpl from '../templates/student.hbs';

refs.team.addEventListener("click", () => {
  refs.teamList.addEventListener('click', oneStudetnCardHandler);
});

function oneStudetnCardHandler(e) {
  setTimeout(() => {
    if (e.target === e.currentTarget) {
      return;
    } else {
      let id = +e.target.id;
      const targetStudetnArray = studentsData.find(function (student) {
        return student.id === id;
      });
      const oneStudentMarkap = studetnOneCardTpl(targetStudetnArray);
      refs.teamList.innerHTML = oneStudentMarkap;
      refs.teamList.removeEventListener('click', oneStudetnCardHandler);
    }
  }, 100);
}
