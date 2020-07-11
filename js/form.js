'use strict';
(function () {
  var adForm = document.querySelector('.ad-form'); /* Находится форма для отправки из разметки */
  var liveAdFormElements = document.querySelector('.ad-form').children; /* Внутри находится коллекция дочерних элементов */
  var liveMapFilterElements = document.querySelector('.map__filters').children; /* Внутри находится коллекция дочерних элементов */
  adForm.classList.add('ad-form--disabled');

  var addAttributeDisabled = function (liveCollection) {
    for (var i = 0; i < liveCollection.length; i++) { /* Цикл для добавления атрибута к полям */
      liveCollection[i].setAttribute('disabled', 'true'); /* Поочередное добавление атрибута к каждому филдсету полей. */
    }
    return liveCollection;
  };
  addAttributeDisabled(liveAdFormElements);
  addAttributeDisabled(liveMapFilterElements);

  window.form = {
    adForm: adForm,
    liveAdFormElements: liveAdFormElements,
    liveMapFilterElements: liveMapFilterElements,
  };
})();
