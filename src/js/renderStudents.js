import refs from './refs';
import studentsTemplate from '../templates/students.hbs';
import students from '../data/students';

export default function renderStudents(event) {
  event.preventDefault();
  refs.movies.innerHTML = studentsTemplate(students);
  refs.movies.classList.add("movies__list");
}
