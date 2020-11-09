import { Spinner } from 'spin.js';
let opts = {
  lines: 12, // Количество выводимых линий
  length: 30, // Длина каждой линии
  width: 20, // Ширина линии
  radius: 35, // Радиус внутреннего круга
  color: '#ff6b08', // #rbg или #rrggbb
  speed: 1, // Вращений в секунду
  trail: 100, // Процент следового свечения
  shadow: true, // Наличие тени у каждой линии
};
function spinRef() {
  let target = document.getElementById('spinner');
  let spinner = new Spinner(opts).spin(target);
}
spinRef();
export default spinRef;