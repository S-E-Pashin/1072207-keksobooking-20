/* eslint-disable no-labels */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
'use strict';
var createCardArray = [];
var locationAxis = {
  axisX: 600,
  axisY: 350,
};
var PRICE_ARRAY = [0, 1000, 5000, 10000];
var TYPE_ROOM_ARRAY = ['palace', 'flat', 'house', 'bungalo'];
var NUMBER_ROOMS_ARRAY = [1, 2, 3, 100];
var NUMBER_GUESTS_ARRAY = [1, 2, 3, 0];
var CHECKIN_ARRAY = ['12:00', '13:00', '14:00'];
var CHECKOUT_ARRAY = ['12:00', '13:00', '14:00'];
var FEATURES_ARRAY = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var photoArray = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
                'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
                'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var X_MIN = 0;
var X_MAX = 1200;
var Y_MIN = 130;
var Y_MAX = 630;
var map = document.querySelector('.map');

// Функция которая принимает в себя значение(параметр)/приравнивается к массивы и с принятым/полученным массивом выполняет математичесскую операцию округления аргумента(Результата умножения содержимого) до ближайшего меньшего целого. Содержимое составляет математичесская функция которая формирует случайное (псевдо) число от 0 до 1 и данное число будет умножено на округленное значение длинны выше принятого массива. Результатом данной функции будет число которое будет соответствовать одному из порядковых номеров указанного нами массива и может использоваться для условнорандомного формирования случайного элемента из данного массива.
var getRandomArrayIndex = function (array) {
  // var arrayLength = array.length;
  return Math.floor(Math.random() * Math.floor(array.length));
};


// Функция которая принимает в себя 2а значения(параметра) 1й это минимальное число из необходимого диапазона а второе является максимальным числом. Функция округлит в большую или меньшую сторону (если >0,5  тогда в большую и наоборот) значение которое будет получено из содержимого. Содержимое: Функция предоставления рандомного числа умножена на разность между максимальным и минимальным числом и к полученному значению прибавляется значение минимального числа(для того чтобы не получить отрицательного числа). Результатом данной функции будет получение рандомного целого числа из указанного диапазона.
function getRandomInteger(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}


// Функция которая запускает цикл создания указанного (из диапазона) количества элементов. Элементы с каждым циклом формируются и их общее значение приравнивается(Является составляющим/ими элементами/объектами) переменной createCardObject(Данная переменная является объектом который с каждой итерацией создает уникальный объект/впитывает в себя значения) следующий шаг это запустить функцию и записать данный объект в массив createCardArray
var createAllCards = function () {
  for (var i = 0; i < 8; i++) {
    var createCardObject = {
      'author' : {
        'avatar' : 'img/avatars/user0' + (i + 1) + '.png'
      },
      'offer': {
        'title' : 'Заголовок предложения',
        // На данный момент решения о передаче данных из location не нашел.
        'address' : "600, 350",
        // Значение ключа берется из массива, номер элемента массива формируется посредством применения функции getRandomArrayIndex которая в свою очередь формирует рандомное число основываясь на полученных данны о данной функции а именнона ее длинне.
        'price' : PRICE_ARRAY[getRandomArrayIndex(PRICE_ARRAY)],
        'type' : TYPE_ROOM_ARRAY[getRandomArrayIndex(TYPE_ROOM_ARRAY)],
        'rooms' : NUMBER_ROOMS_ARRAY[getRandomArrayIndex(NUMBER_ROOMS_ARRAY)],
        'guests' : NUMBER_GUESTS_ARRAY[getRandomArrayIndex(NUMBER_GUESTS_ARRAY)],
        'checkin' : CHECKIN_ARRAY[getRandomArrayIndex(CHECKIN_ARRAY)],
        'checkout' : CHECKOUT_ARRAY[getRandomArrayIndex(CHECKOUT_ARRAY)],
        //Ключу равно значение копии исходного массива FEATURESARRAY от которого отрезана часть его элементов. Это выполнено посредством метода slice которому задано минимальное значение 0 а максимальное(то до которого необходимо совершить вырезание необходимой части цикла) представлено в виде выполняемой функции предоставления рандомного числа элемента массива который основывается на полученной информации о данном массиве.
        'features' : FEATURES_ARRAY.slice(0, getRandomArrayIndex(FEATURES_ARRAY)),
        'description' : 'строка с описанием',
        'photos' : photoArray.slice(0, getRandomArrayIndex(photoArray)),
      },
      'location': {
        'x' : getRandomInteger(X_MIN, X_MAX),
        'y' : getRandomInteger(Y_MIN, Y_MAX)
      },
    }
    createCardArray.push(createCardObject);
    // var xCopy = createCardObject.location.x;
  }
  return createCardArray;
};

// Запускаем выполнение функции по формированию массива с объектами.
createAllCards();
// Выводим значение массива в консоль.
console.log(createCardArray);

// Удален класс map--faded из элемента с классом map
map.classList.remove('map--faded');
console.log(map);
