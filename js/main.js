/* eslint-disable no-labels */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
'use strict';
var PRICES = [0, 1000, 5000, 10000];
var TYPES_ROOM = ['palace', 'flat', 'house', 'bungalo'];
var NUMBER_ROOMS = [1, 2, 3, 100];
var NUMBER_GUESTS = [1, 2, 3, 0];
var CHECKINS_CHECKOUTS = ['12:00', '13:00', '14:00'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
                'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
                'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var X_MIN = 0;
var X_MAX = 1200;
var Y_MIN = 130;
var Y_MAX = 630;

var NUMBER_CARDS = 8; /* Количество карт карт/объектов для последующего добавления в массив. */
var WIDTH_AVATAR = 50;
var HEIGHT_AVATAR = 70;









// НЕАКТИВНОЕ СОСТОЯНИЕ:


/* Могу объединить для краткости соединив поиск с передачей дочерних элементов */
var adForm = document.querySelector('.ad-form'); /* Находится форма для отправки из разметки */
// var liveAdFormElements = adForm.children; /* Внутри находится коллекция дочерних элементов */
adForm.classList.add('ad-form--disabled');

var liveAdFormElements = document.querySelector('.ad-form').children;
var liveMapFilterElements = document.querySelector('.map__filters').children;
// console.log(liveAdFormElements);

// for (var i = 0; i < liveAdFormElements.length; i++) { /* Цикл для добавления атрибута к полям */
//   liveAdFormElements[i].setAttribute('disabled', 'true'); /* Поочередное добавление атрибута к каждому филдсету полей. */
// }

var addAttributeDisabled = function (liveCollection) {
  for (var i = 0; i < liveCollection.length; i++) { /* Цикл для добавления атрибута к полям */
    liveCollection[i].setAttribute('disabled', 'true'); /* Поочередное добавление атрибута к каждому филдсету полей. */
  }
  return liveCollection;
};

addAttributeDisabled(liveAdFormElements);
addAttributeDisabled(liveMapFilterElements);

// console.log(addAttributeDisabled);
// console.log(addAttributeDisabled(liveAdFormElements));
// console.log(liveMapFilterElements);


// АКТИВНОЕ СОСТОЯНИЕ

var mapPinMain = document.querySelector('.map__pin--main');


var mapPinMainActions = function () {

  console.log('Вывод в консоль нажатия');
  adForm.classList.remove('ad-form--disabled');

  var removeAttributeDisabled = function (liveCollection) {
    for (var i = 0; i < liveCollection.length; i++) { /* Цикл для удаления  атрибута к полям */
      liveCollection[i].removeAttribute('disabled', 'true'); /* Поочередное удаление атрибута к каждому филдсету полей. */
    }
    return liveCollection;
  };
  removeAttributeDisabled(liveAdFormElements);
  removeAttributeDisabled(liveMapFilterElements);

  var getRandomArrayIndex = function (array) { /* // Функция которая принимает в себя значение(параметр)/приравнивается к массивы и с принятым/полученным массивом выполняет математичесскую операцию округления аргумента(Результата умножения содержимого) до ближайшего меньшего целого. Содержимое составляет математичесская функция которая формирует случайное (псевдо) число от 0 до 1 и данное число будет умножено на округленное значение длинны выше принятого массива. Результатом данной функции будет число которое будет соответствовать одному из порядковых номеров указанного нами массива и может использоваться для условнорандомного формирования случайного элемента из данного массива. */
    // var arrayLength = array.length;
    return Math.floor(Math.random() * Math.floor(array.length));
  };


  var getRandomInteger = function (min, max) { /* // Функция которая принимает в себя 2а значения(параметра) 1й это минимальное число из необходимого диапазона а второе является максимальным числом. Функция округлит в большую или меньшую сторону (если >0,5  тогда в большую и наоборот) значение которое будет получено из содержимого. Содержимое: Функция предоставления рандомного числа умножена на разность между максимальным и минимальным числом и к полученному значению прибавляется значение минимального числа(для того чтобы не получить отрицательного числа). Результатом данной функции будет получение рандомного целого числа из указанного диапазона. */
    return Math.round(Math.random() * (max - min) + min);
  };

  var createAllCards = function () { /* // Функция которая запускает цикл создания указанного (из диапазона) количества элементов. Элементы с каждым циклом формируются и их общее значение приравнивается(Является составляющим/ими элементами/объектами) переменной createCardObject(Данная переменная является объектом который с каждой итерацией создает уникальный объект/впитывает в себя значения) следующий шаг это запустить функцию и записать данный объект в массив createdCardsArray */
    var createdCardsArray = [];
    for (var i = 0; i < NUMBER_CARDS; i++) {
      var createCardObject = {
        'author' : {
          'avatar' : 'img/avatars/user0' + (i + 1) + '.png'
        },
        'offer': {
          'title' : 'Заголовок предложения',
          'address' : "600, 350", /* // На данный момент решения о передаче данных из location не нашел. */
          'price' : PRICES[getRandomArrayIndex(PRICES)], /* Значение ключа берется из массива, номер элемента массива формируется посредством применения функции getRandomArrayIndex которая в свою очередь формирует рандомное число основываясь на полученных данны о данной функции а именнона ее длинне. */
          'type' : TYPES_ROOM[getRandomArrayIndex(TYPES_ROOM)],
          'rooms' : NUMBER_ROOMS[getRandomArrayIndex(NUMBER_ROOMS)],
          'guests' : NUMBER_GUESTS[getRandomArrayIndex(NUMBER_GUESTS)],
          'checkin' : CHECKINS_CHECKOUTS[getRandomArrayIndex(CHECKINS_CHECKOUTS)],
          'checkout' : CHECKINS_CHECKOUTS[getRandomArrayIndex(CHECKINS_CHECKOUTS)],
          'features' : FEATURES.slice(0, getRandomArrayIndex(FEATURES)), /* Ключу равно значение копии исходного массива FEATURESARRAY от которого отрезана часть его элементов. Это выполнено посредством метода slice которому задано минимальное значение 0 а максимальное(то до которого необходимо совершить вырезание необходимой части цикла) представлено в виде выполняемой функции предоставления рандомного числа элемента массива который основывается на полученной информации о данном массиве. */
          'description' : 'строка с описанием',
          'photos' : PHOTOS.slice(0, getRandomArrayIndex(PHOTOS)),
        },
        'location': {
          'x' : getRandomInteger(X_MIN, X_MAX),
          'y' : getRandomInteger(Y_MIN, Y_MAX)
        },
      }
      createdCardsArray.push(createCardObject);
    }
    return createdCardsArray;
  };

  var map = document.querySelector('.map');

  // map.classList.remove('map--faded');/* Удален класс map--faded из элемента с классом map */ /* Удаляется согласно 4 заданию */

  var saveAllCards = createAllCards(); /* Переменная которая хранит массив с объектами.Запускаем выполнение функции по формированию массива с объектами. */
  var templatePin = document.querySelector('#pin').content.querySelector('.map__pin');/* ДОБАВЛЕНИЕ ЧЕРЕЗ template// Создана переменная template(одноименна с названием элемента template) которая ищет элемент/шаблон template по id, после обращается к свойству данного элемента content(которое является единственным свойством данного элемента и предназначено для взаимодействия с его содержимым.) */

  var renderPinCloneTemplateElements = function (item) {
    var pinCloneTemplate = templatePin.cloneNode(true);/* Создаем переменную в которую записываем/копируем/клонируем элемент/переменную/Шаблон(вернее шаблон, просто задан переменной.) template со всем ее содержимым(Т.е. всю ее разметку вместе с детьми/если бы были.(true), если дети узла должны быть клонированы или false для того, чтобы был клонирован только указанный узел.) */
    var pinCloneTemplateImage = pinCloneTemplate.querySelector('img');

    pinCloneTemplateImage.src = item.author.avatar;
    pinCloneTemplateImage.alt = item.offer.title;

    pinCloneTemplate.style.left = (item.location.x - WIDTH_AVATAR / 2) + 'px';/* Изменение по оси x. Ширина объекта исходя из разметки составляет 50px. Т.к. точка 0 для отрисованного объекта в разметке находится в левом верхнем углу фигуры мы понимаем что нам необходимо сместить фигуру для получения нахождения острия отображаемого изображения на половину ее ширины, тем самым разделив ее ширину пополам. Для этого будет заведена константа WIDTH_AVATAR и разделена пополам непосредственно в выполняемом выражении а после вычтена из создаваемой координаты для определения положения элемента на оси Х.  */
    pinCloneTemplate.style.top = (item.location.y - HEIGHT_AVATAR) + 'px'; /* Высота = 70px Смещение по вертикали на высоту элемента путем вычитания из положения по оси У целого значения высоты элемента.*/

    return pinCloneTemplate;
  };


  var mapPins = document.querySelector('.map__pins');/* Переменная для нахождения блока с классом map__pins. (в последующем будет использоваться для добавления элементов в разметку посредством documentFragment)Это блок для отрисовки. */
  var fragment = document.createDocumentFragment();

  var addPinAllCards = function (items) {

    for (var i = 0; i < items.length; i++) { /* Цикл который добавляет элементы в разметку. (В виртуальную разметку-не меняет исходный HTML). */
      fragment.appendChild(renderPinCloneTemplateElements(items[i]));
    }
    mapPins.appendChild(fragment); /* Добавляем элемент|Фрагмент который представляет из себя элемент pin с всей разметкой и указанными нами свойствами в элемент с классом mapPins(внутрь данного элемента/вернее его клона) в конец. Это выполняется для т.н. накопления всех элементов этого блока для их совместной, последующей, единоразовой, последовательной отрисовки посредством использования fragment. */
  };
  /* Отрисовка в активном состоянии */

  addPinAllCards(saveAllCards);

};

// console.log(mapPinMainActions);

mapPinMain.addEventListener('mousedown', function (evt) { /* Добавлен слушатель/обработчик на событие mousedown + клик левой клавишей мыши*/
  if (evt.which == 1) {
    mapPinMainActions();
  }
});

mapPinMain.addEventListener('keydown', function (evt) { /* Добавлен слушатель/обработчик на событие keydown Enter */
  if (evt.key == 'Enter') {
    mapPinMainActions();
  }
});
