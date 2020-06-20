/* eslint-disable no-labels */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
'use strict';

// На данный момент передача не организована. Возможно будет удалено.
// var locationAxis = {
//   axisX: 600,
//   axisY: 350,
// };

var PRICES_ARRAY = [0, 1000, 5000, 10000];
var TYPES_ROOM_ARRAY = ['palace', 'flat', 'house', 'bungalo'];
var NUMBER_ROOMS_ARRAY = [1, 2, 3, 100];
var NUMBER_GUESTS_ARRAY = [1, 2, 3, 0];
var CHECKINS_ARRAY = ['12:00', '13:00', '14:00'];
var CHECKOUTS_ARRAY = ['12:00', '13:00', '14:00'];
var FEATURES_ARRAY = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var photosArray = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
                'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
                'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var X_MIN = 0;
var X_MAX = 1200;
var Y_MIN = 130;
var Y_MAX = 630;

// Функция которая принимает в себя значение(параметр)/приравнивается к массивы и с принятым/полученным массивом выполняет математичесскую операцию округления аргумента(Результата умножения содержимого) до ближайшего меньшего целого. Содержимое составляет математичесская функция которая формирует случайное (псевдо) число от 0 до 1 и данное число будет умножено на округленное значение длинны выше принятого массива. Результатом данной функции будет число которое будет соответствовать одному из порядковых номеров указанного нами массива и может использоваться для условнорандомного формирования случайного элемента из данного массива.
var getRandomArrayIndex = function (array) {
  // var arrayLength = array.length;
  return Math.floor(Math.random() * Math.floor(array.length));
};


// Функция которая принимает в себя 2а значения(параметра) 1й это минимальное число из необходимого диапазона а второе является максимальным числом. Функция округлит в большую или меньшую сторону (если >0,5  тогда в большую и наоборот) значение которое будет получено из содержимого. Содержимое: Функция предоставления рандомного числа умножена на разность между максимальным и минимальным числом и к полученному значению прибавляется значение минимального числа(для того чтобы не получить отрицательного числа). Результатом данной функции будет получение рандомного целого числа из указанного диапазона.
function getRandomInteger(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}


// Функция которая запускает цикл создания указанного (из диапазона) количества элементов. Элементы с каждым циклом формируются и их общее значение приравнивается(Является составляющим/ими элементами/объектами) переменной createCardObject(Данная переменная является объектом который с каждой итерацией создает уникальный объект/впитывает в себя значения) следующий шаг это запустить функцию и записать данный объект в массив createCardsArray
var createAllCards = function () {
  var createCardsArray = [];
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
        'price' : PRICES_ARRAY[getRandomArrayIndex(PRICES_ARRAY)],
        'type' : TYPES_ROOM_ARRAY[getRandomArrayIndex(TYPES_ROOM_ARRAY)],
        'rooms' : NUMBER_ROOMS_ARRAY[getRandomArrayIndex(NUMBER_ROOMS_ARRAY)],
        'guests' : NUMBER_GUESTS_ARRAY[getRandomArrayIndex(NUMBER_GUESTS_ARRAY)],
        'checkin' : CHECKINS_ARRAY[getRandomArrayIndex(CHECKINS_ARRAY)],
        'checkout' : CHECKOUTS_ARRAY[getRandomArrayIndex(CHECKOUTS_ARRAY)],
        //Ключу равно значение копии исходного массива FEATURESARRAY от которого отрезана часть его элементов. Это выполнено посредством метода slice которому задано минимальное значение 0 а максимальное(то до которого необходимо совершить вырезание необходимой части цикла) представлено в виде выполняемой функции предоставления рандомного числа элемента массива который основывается на полученной информации о данном массиве.
        'features' : FEATURES_ARRAY.slice(0, getRandomArrayIndex(FEATURES_ARRAY)),
        'description' : 'строка с описанием',
        'photos' : photosArray.slice(0, getRandomArrayIndex(photosArray)),
      },
      'location': {
        'x' : getRandomInteger(X_MIN, X_MAX),
        'y' : getRandomInteger(Y_MIN, Y_MAX)
      },
    }
    createCardsArray.push(createCardObject);
    // var xCopy = createCardObject.location.x;
  }
  // console.log(createCardsArray);
  return createCardsArray;
};

// Запускаем выполнение функции по формированию массива с объектами.
createAllCards();

var map = document.querySelector('.map');
// Удален класс map--faded из элемента с классом map
map.classList.remove('map--faded');
// console.log(map);

// Переменная которая хранит массив с объектами.
var saveAllCards = createAllCards();

// ДОБАВЛЕНИЕ ЧЕРЕЗ template
// Создана переменная template(одноименна с названием элемента template) которая ищет элемент/шаблон template по id, после обращается к свойству данного элемента content(которое является единственным свойством данного элемента и предназначено для взаимодействия с его содержимым.)
var templatePin = document.querySelector('#pin').content.querySelector('.map__pin');
// console.log(templatePin);

var renderPinCloneTemplateElements = function (item) {
    //  Создаем переменную в которую записываем/копируем/клонируем элемент/переменную/Шаблон(вернее шаблон, просто задан переменной.) template со всем ее содержимым(Т.е. всю ее разметку вместе с детьми/если бы были.(true), если дети узла должны быть клонированы или false для того, чтобы был клонирован только указанный узел.)
  var pinCloneTemplate = templatePin.cloneNode(true);
  var pinCloneTemplateImage = pinCloneTemplate.querySelector('img');
  // почему работают с кавычками в то время как это же строка(в кавычках)
  pinCloneTemplateImage.src = item.author.avatar;
  pinCloneTemplateImage.alt = item.offer.title;

  // Не учтено смещение!  Почему в одной точке?
  pinCloneTemplate.style.left = item.location.x + 'px';
  pinCloneTemplate.style.top = item.location.y + 'px';

  return pinCloneTemplate;
};

// Переменная для нахождения блока с классом map__pins. (в последующем будет использоваться для добавления элементов в разметку посредством documentFragment)Это блок для отрисовки.
var mapPins = document.querySelector('.map__pins');

var fragment = document.createDocumentFragment();

var addPinAllCards = function (items) {
// Цикл который добавляет элементы в разметку. (В виртуальную разметку-не меняет исходный HTML).
  for (var i = 0; i < items.length; i++) {
    fragment.appendChild(renderPinCloneTemplateElements(items[i]));
  }
  // Добавляем элемент|Фрагмент который представляет из себя элемент pin с всей разметкой и указанными нами свойствами в элемент с классом mapPins(внутрь данного элемента/вернее его клона) в конец. Это выполняется для т.н. накопления всех элементов этого блока для их совместной, последующей, единоразовой, последовательной отрисовки посредством использования fragment.
  mapPins.appendChild(fragment);
};
addPinAllCards(saveAllCards);

// Вызов функции отрисовки всех элементов с установкой параметра для отрисовки в виде Массива с объектами который после обработки будет представлять собой перечень элементов в одном указанном нами блоке.

// // ДОБАВЛЕНИЕ ЧЕРЕЗ JS
// // Переменная которая создает фрагмент
// // var fragment = document.createDocumentFragment();

// // цикл для создания нескольких объектов.
// for (var i = 0; i < 8; i++) {
//   // Переменная которая будет создавать элемент div
//   var newElement = document.createElement('div');
//   // Данному div будет присваиваться класс el
//   newElement.className = 'el';
//   // и в него будет записан span с содержимым равным i т.е. индексу из цикла.
//   newElement.innerHTML = '<span>' + i + '</span>';
//   // Добавляем созданный элемент во фрагмент.
//   fragment.appendChild(newElement);
// }
// // Добавляю созданные посредством createElement и записанные в fragment элементы в mapPins
// mapPins.appendChild(fragment);