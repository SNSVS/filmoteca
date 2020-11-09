import { Spinner } from 'spin.js';
export default {
  opts: {
    lines: 12, // Количество выводимых линий
    length: 30, // Длина каждой линии
    width: 20, // Ширина линии
    radius: 35, // Радиус внутреннего круга
    color: '#ff6b08', // #rbg или #rrggbb
    speed: 1, // Вращений в секунду
    trail: 100, // Процент следового свечения
    shadow: true, // Наличие тени у каждой линии
  },
  start() {
    const target = document.getElementById('spinner');
    this.spinner = new Spinner(this.opts).spin(target);
    console.log('spinnet.start');
    return this.spinner;
  },
  stop() {
    const target = document.getElementById('spinner');
    this.spinner.stop();
    console.log('spinnet.stop');
    return this.spinner;
  },
};
