'use strict';
// --ФОРМА FORM-------------------------------------------------------------------------------------------------------------
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

  // Количество возможных гостей в зависимости от количество арендуемых комнат.
  // var roomNumbers = document.querySelector('#room_number');
  var guestsNumber = document.querySelector('#capacity');
  var roomNumbers = document.getElementById('room_number');/* Поле выбора количества комнат. */

  var onRoomNumbersCheck = function () { /* Функция проверки валидности заполнения полей комнат и количества гостей. */
    if (guestsNumber.options[guestsNumber.selectedIndex].value !== roomNumbers.options[roomNumbers.selectedIndex].value) { /* Если значение(количественное)value выбранному значению(в данный момент) номера не равно количественному значению комнат тогда выполнится условие */
      if (guestsNumber.options[guestsNumber.selectedIndex].value > roomNumbers.options[roomNumbers.selectedIndex].value || guestsNumber.options[guestsNumber.selectedIndex].value === '0' && roomNumbers.options[roomNumbers.selectedIndex].value > guestsNumber.options[guestsNumber.selectedIndex].value) { /* Если число гостей выбранное в данный момент превышает количество выбранных в данный момент комнат ИЛИ значение количества выбранных комнат строго равно 0 И количество выбранных комнат больше чем количество выбранных для заселения гостей(В данном случае если количество выбранных гостей больше 0 что подразумевает что комната выбрана не для заселения физ лиц а для аренды Юр лицом.) */
        roomNumbers.setCustomValidity('Некорректное значение');
        guestsNumber.style.backgroundColor = 'pink'; /* Подсвет розовым неверного ответа */
        roomNumbers.style.backgroundColor = 'pink'; /* Подсвет розовым неверного ответа */
      } else {
        roomNumbers.setCustomValidity(''); /* Убрать значение не соответствия валидации */
        guestsNumber.style.backgroundColor = ''; /* Убрать подсвет розовым неверного ответа */
        roomNumbers.style.backgroundColor = ''; /* Убрать подсвет розовым неверного ответа */
      }
    } else {
      roomNumbers.setCustomValidity(''); /* Убрать значение не соответствия валидации */
      guestsNumber.style.backgroundColor = ''; /* Убрать подсвет розовым неверного ответа */
      roomNumbers.style.backgroundColor = ''; /* Убрать подсвет розовым неверного ответа */
    }
  };
  window.form = {
    adForm: adForm,
    liveAdFormElements: liveAdFormElements,
    liveMapFilterElements: liveMapFilterElements,
    onRoomNumbersCheck: onRoomNumbersCheck,
    guestsNumber: guestsNumber,
    roomNumbers: roomNumbers
  };
})();

// ---------------------------FORM ФОРМА КОНЕЦ--------------------------------------------------------------------