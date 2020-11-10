import refs from './refs';
import studentsTemplate from '../templates/students.hbs';
import students from '../data/students';
import { hiddenPagination } from './paginate/hiddenShowPaginate';

export default function renderStudents(event) {
  refs.movies.classList.remove('movies__list');
  hiddenPagination();
  event.preventDefault();
  refs.movies.innerHTML = '';
  refs.teamList.innerHTML = studentsTemplate(students);
  refs.teamList.classList.add('movies__list');
  refs.teamList.classList.remove('js-studentCard');
}
