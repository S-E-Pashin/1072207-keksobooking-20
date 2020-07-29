'use strict';
(function () {
  // ###################### ДЛЯ ПЕРЕНОСА В filter ##########################

  var selectHousingType = document.getElementById('housing-type');
  var pins = function (data) { /* Фильтр В нем произойден фильтрация от поля выбора комнаты. В data будут находиться данные с сервера/Данные об объектах для отображения - xhr.response */

    window.pin.renderPinCards(data);
    // var mapPinNoMain = document.querySelectorAll('map__pin:not(.map__pin--main)');

    selectHousingType.addEventListener('input', function () {
      var valueHousingType = selectHousingType.value;
      var newData = [];
      var any = 'any';
      // ############### Вариант 1.  В процессе замены на switch case #####################
      //   if (valueHousingType == 'any') {
      //     console.log('Выбрано any в фильтре');
      //     window.pin.renderPinCards(data);
      //   } else {
      // // 'bungalo',
      // // 'flat',
      // // 'house',
      // // 'palace'
      //   };
      // Вариант 1 Конец.  ########################################################################

      // Вариант 2. Перерабатываю на switch case ################################################# Идея дальше переработать в зависимость от type реакция на изм от обратного
      // var getHousingTypeFilter = function (HousingType) {

      // switch (valueHousingType) {
      //   case 'any':/* Не работает как все ! Изза ? Приравниваю в нев дату дату. */
      //     console.log('any - выбор Без фильтра');
      //     // newData = data;
      //     // window.pin.renderPinCards(data);
      //     // return newData;
      //     data.forEach(function (i) {
      //       if (i.offer.type === 'bungalo' || i.offer.type === 'flat' || i.offer.type === 'house' || i.offer.type === 'palace') {
      //         // console.log(i);
      //         newData.push(i);
      //       }
      //       // console.log(i);
      //     });
      //     break;
      //   case 'bungalo':
      //     console.log('выбор bungalo');
      //     // console.log(data[0]);
      //     // console.log(data[0].offer.type);
      //     data.forEach(function (i) {
      //       if (i.offer.type === 'bungalo') {
      //         // console.log(i);
      //         newData.push(i);
      //       }
      //       // console.log(i);
      //     });
      //     // var mapPinNoMain = document.querySelectorAll('.map__pin:not(.map__pin--main)');
      //     // // Удаляю элементы из разметки.
      //     // mapPinNoMain.forEach(function (oldPin) {
      //     //   oldPin.remove();
      //     // });

      //     // data = [];
      //     // window.pin.renderPinCards(data);
      //     // window.pin.renderPinCards(newData);
      //     break;
      //   case 'flat':
      //     console.log('выбор flat');
      //     data.forEach(function (i) {
      //       if (i.offer.type === 'flat') {
      //         // console.log(i);
      //         newData.push(i);
      //       }
      //     });
      //     break;
      //   case 'house':
      //     console.log('выбор house');
      //     data.forEach(function (i) {
      //       if (i.offer.type === 'house') {
      //         // console.log(i);
      //         newData.push(i);
      //       }
      //     });
      //     break;
      //   case 'palace':
      //     console.log('выбор palace');
      //     data.forEach(function (i) {
      //       if (i.offer.type === 'palace') {
      //         // console.log(i);
      //         newData.push(i);
      //       }
      //     });
      //     break;
      // }
      // Вариант 2 Конец.  ########################################################################
      // data = [];

      // Вариант 3. Улучшаю, уменьшаю #################################################
      // data.forEach(function (i) {
      //   if (i.offer.type === selectHousingType.value) {
      //     // console.log(i);
      //     newData.push(i);
      //   }
      //   // console.log(i);
      // });
      // Вариант 3 Конец.  ########################################################################

      // Вариант 4. Улучшаю, уменьшаю #################################################
      data.forEach(function (i) {
        if (valueHousingType === i.offer.type) {
          // console.log(i);
          newData.push(i);
        } else if (valueHousingType === any) { /* Не работает как должно(В логе все нормально а отображения должного нет.) */
          newData = data;
          window.pin.renderPinCards(newData);
        }
        // console.log(i);
      });
      // Вариант 4 Конец.  ########################################################################
      window.pin.renderPinCards(newData);
      // window.pin.renderPinCards(data);
      console.log('new');
      console.log(newData);
      console.log('old');
      console.log(data);
      // window.pin.renderPinCards(data);
      // return newData;
      // };
      // getHousingTypeFilter(valueHousingType);


      // Мне нужно что бы:
      /* При изменении фильтра valueHousingType изменялись отображаемые объявления.
      1 Если совпадает выбранное значение value с тем что находится в данных объекта то такой объект остается
      2 Если не совпадает то объект из массива удаляется
      3 После удаления всех не совпадающих объектов Массив с оставшимися объектами фильтруется по очереди, по имени.
      4 Скрываются раскрытые окна объявлений(Пока открытие не реализовано.)
      5 Вызывается новый рендер объектов.

      Переработанный ход мысли:
      1. При изменении Рендере удаляются старые элементы из отображаемых.
      2. При выборе какого либо поля в массиве появляются элементы которые соответствуют выбранному полю. */
    });
    // console.log('new');
    // console.log(newData);

    // window.pin.renderPinCards(newData);

  };

  console.log(selectHousingType);
  console.log(selectHousingType.value);
  // console.log();
  // #####################################################################
  // var housingType = document.getElementById('housing-type');

  // var addPinCards = function (items) { /*  Функция добавления элементов в разметку посредством fragment. */
  //   for (var i = 0; i < items.length; i++) { /* Цикл который добавляет элементы в разметку. (В виртуальную разметку-не меняет исходный HTML). */
  //     fragment.appendChild(renderPinCloneTemplateElements(items[i]));
  //   }
  //   mapPins.appendChild(fragment); /* Добавляем элемент|Фрагмент который представляет из себя элемент pin с всей разметкой и указанными нами свойствами в элемент с классом mapPins(внутрь данного элемента/вернее его клона) в конец. Это выполняется для т.н. накопления всех элементов этого блока для их совместной, последующей, единоразовой, последовательной отрисовки посредством использования fragment. */
  // };

  window.filter = {/* Экспорт данных в область общей видимости. */
    pins: pins
  };
})();

// 0:
//  author: {avatar: "img/avatars/user01.png"}
//  location: {x: 428, y: 493}
//  offer:
//    address: "102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3"
//    checkin: "14:00"
//    checkout: "10:00"
//    description: "Великолепный таун-хауз в центре Токио. Подходит как туристам, так и бизнесменам. Дом полностью укомплектован и имеет свежий ремонт."
//    features: (6) ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"]
//    guests: 6
//    photos: (7) ["https://cdn.ostrovok.ru/t/x500/mec/hotels/11000000/10360000/10357700/10357605/10357605_25_b.jpg", "https://cdn.ostrovok.ru/t/x500/mec/hotels/11000000/10360000/10357700/10357605/10357605_27_b.jpg", "https://cdn.ostrovok.ru/t/x500/mec/hotels/11000000/10360000/10357700/10357605/10357605_17_b.jpg", "https://cdn.ostrovok.ru/t/x500/mec/hotels/11000000/10360000/10357700/10357605/10357605_30_b.jpg", "https://cdn.ostrovok.ru/t/x500/mec/hotels/10000000/9160000/9151200/9151174/9151174_1_b.jpg", "https://cdn.ostrovok.ru/t/x500/mec/hotels/10000000/9160000/9151200/9151174/9151174_12_b.jpg", "https://cdn.ostrovok.ru/t/x500/mec/hotels/10000000/9160000/9151200/9151174/9151174_5_b.jpg"]
//    price: 42000
//    rooms: 3
//    title: "Уютное гнездышко для молодоженов"
//    type: "house"
