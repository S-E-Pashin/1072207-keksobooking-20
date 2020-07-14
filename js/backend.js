'use strict';

var xhr = new XMLHttpRequest(); /* Свойство XMLHttpRequest.readyState возвращает текущее состояние объекта XMLHttpRequest. Объект XHR может иметь следующие состояния:  */
// 0	UNSENT	Объект был создан. Метод open() ещё не вызывался.
// 1	OPENED	Метод open() был вызван.
// 2	HEADERS_RECEIVED	Метод send() был вызван, доступны заголовки (headers) и статус.
// 3	LOADING	Загрузка; responseText содержит частичные данные.
// 4	DONE	Операция полностью завершена.
console.log(xhr.readyState + ' - Изначальное состояние запроса'); /* 0 - Объект был создан. Метод open() ещё не вызывался. */
// console.log(xhr);

xhr.open('GET', 'https://javascript.pages.academy/keksobooking/data'); /* Как и куда хочу обратиться(Адрес от куда получить данные.) Взято из 5.1 ТЗ Верно ???*/
// https://javascript.pages.academy/keksobooking/data

console.log(xhr.readyState + ' readyState- состояние запроса после указания адреса для обращения'); /* 1 - Метод open() был вызван. */
console.log('Состояние xhr:');
console.log(xhr);

xhr.send(); /* Запуск отправки запроса на сервер. Получены данные которые содержатся в response и responseText */

console.log('Состояние xhr после отправки запроса на сервер:');
console.log(xhr);


xhr.addEventListener('load', function (evt) {
  console.log(xhr.readyState + ' readyState- Состояние запроса после срабатывания слушателя на загрузку:'); /* 4	DONE	Операция полностью завершена. */
  console.log('status ' + xhr.status + ' statusText ' + xhr.statusText);
  // status Статус ответа на запрос. Равен кодам HTTP (200 - успешно, 404 не найдено, 301 - перенесено навсегда).
  // statusText Строка статуса ответа. В отличи от поля status, эта строка включает в себя текст - ("200 OK", например).
  console.log(evt.target === xhr);
  console.log(JSON.parse(xhr.responseText)); /* Отобразит полученные данные от сервера строкой но посредством JSON.parse преобразует полученную строку в данные. */
});

console.log('Состояние xhr после функции прослушивателя на загрузке:');
console.log(xhr);
console.log(xhr.readyState + ' readyState - Состояние запроса после слушателя на загрузку:');

console.log(xhr.responseText + 'Проверка.');
