/* eslint-disable no-console */
'use strict';

(function () {
  var xhr = new XMLHttpRequest(); /* Свойство XMLHttpRequest.readyState возвращает текущее состояние объекта XMLHttpRequest. Объект XHR может иметь следующие состояния:  */
  xhr.responseType = 'json'; /* Преобразую за счет встроенных возможностей браузера текст в строку что бы не выполнять данные трансформации в ручную посредством - console.log(JSON.parse(xhr.responseText)); /* Отобразит полученные данные от сервера строкой но посредством JSON.parse преобразует полученную строку в данные.  */
  xhr.open('GET', 'https://javascript.pages.academy/keksobooking/data'); /* Как и куда хочу обратиться(Адрес от куда получить данные.) Взято из 5.1 ТЗ Верно ???*/
  xhr.send(); /* Запуск отправки запроса на сервер. Получены данные которые содержатся в response и responseText */
  // console.log(xhr.response);
  var body = function () {
    xhr.addEventListener('load', function (/* evt */) { /* Прослушиватель события загрузки xhr */
      // console.log(xhr.response);
      var bodyResponse = xhr.response;
      // console.log(body);
      // try {
      //   console.log(evt.target === xhr);
      //   console.log(xhr.response); /* Отображаю полученные данные(В виде данных т.к. использовано браузерное преобразование строки - xhr.responseType = 'json';) */
      //   console.log(onSuccess(xhr.response) + 'dsdsds');
      // } catch (err) {
      //   console.error(err.message);
      // }
      // console.log(bodyResponse);
      return bodyResponse;
    });
    return;
  };
  console.log(body());
  // var onError = function (message) { /* // Функция ошибки */ /* Не понимаю как это связано. */
  //   console.error(message);
  // };
  // console.log(xhr.response);
  // var onSuccess = function (data) {
  //   var CHTO = data;
  //   console.log(CHTO);
  // }

  // // console.log(xhr.readyState + ' - Изначальное состояние запроса'); /* 0 - Объект был создан. Метод open() ещё не вызывался. */
  // console.log(xhr);

  // console.log(xhr.response);

  // // console.log('Состояние xhr после отправки запроса на сервер:');
  // // console.log(xhr);
  // // console.log('Состояние xhr после функции прослушивателя на загрузке:');
  // // console.log(xhr);
  // // console.log(xhr.readyState + ' readyState - Состояние запроса после слушателя на загрузку:');

  // // console.log(xhr.responseText + 'Проверка.');
  // console.log(xhr.response);

  // Код из демонстрации. Весь кроме адреса.
  // var URL = 'https://javascript.pages.academy/keksobooking/data';
  // var StatusCode = {
  //   OK: 200
  // };
  // var TIMEOUT_IN_MS = 10000;

  // window.load = function (onSuccess, onError) {
  //   var xhr = new XMLHttpRequest();
  //   xhr.responseType = 'json';

  //   xhr.addEventListener('load', function () {
  //     if (xhr.status === StatusCode.OK) {
  // onSuccess(xhr.response);
  // console.log(onSuccess(xhr.response) + 'dsdsds');
  //     } else {
  //       onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
  //     }
  //   });
  //   xhr.addEventListener('error', function () {
  //     onError('Произошла ошибка соединения');
  //   });
  //   xhr.addEventListener('timeout', function () {
  //     onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
  //   });

  //   xhr.timeout = TIMEOUT_IN_MS;

  //   xhr.open('GET', URL);
  //   xhr.send();
  // };

})();
