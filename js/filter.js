'use strict';
(function () {
  // ###################### ДЛЯ ПЕРЕНОСА В filter ##########################

  var housingType = document.getElementById('housing-type');
  var pins = function (data) { /* Фильтр В нем произойден фильтрация от поля выбора комнаты. В data будут находиться данные с сервера/Данные об объектах для отображения - xhr.response */
    window.pin.renderPinCards(data);
  };

  console.log(housingType);
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
