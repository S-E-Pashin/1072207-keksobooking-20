/* eslint-disable no-labels */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
'use strict';

// Пока все что объединяет это возможно вызов функции активации страницы.
(function () {
  window.pin.mapPinMain.addEventListener('mousedown', window.pin.onMainPinMouseOrKeyDown); /* Добавлен слушатель/обработчик на событие mousedown + клик левой клавишей мыши*/
  window.pin.mapPinMain.addEventListener('keydown', window.pin.onMainPinMouseOrKeyDown);/* Добавлен слушатель/обработчик на событие keydown Enter */
})();

// ---------------------------------------------------------------------------------------------------------------
// Пока пусть работает страница постоянно.
// mapPinMainActions();
