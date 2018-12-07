// Находим сам элемент окна и его хеадер
var sectionElement = document.querySelector('section');
var headerElement = document.querySelector('header');

// Просто для примера устанавливаем стили
sectionElement.style.left = '100px';
sectionElement.style.top = '100px';


// элемент перетаскивается или нет (в данный момент)
var draggable = false;

var layerX, layerY;
// Зажимаем мышь на заголовке
headerElement.addEventListener('mousedown', function(e) {
    // говорим о том что окно перетаскивается
    draggable = true;

    // layerX,layerY - это позиция мыши относительно таргета (не окна браузера)
    layerX = e.layerX;
    layerY = e.layerY;

    // Добавляем обработчик на движение
    document.addEventListener('mousemove', setWindowPosition);
})

var newClientX, newClientY;
document.addEventListener('mouseup', function() {
    // выключаем перетаскивание
    draggable = false;
    document.removeEventListener('mousemove', setWindowPosition);
});

function setWindowPosition(e) {
    // e.buttons - какие кнопки мыши нажаты - 1 это левая
    // если нажата левая кнопка мыши и элемент перетаскивается
    if (e.buttons === 1 && draggable) {
        // вычисляем стили для окна
        // берем текущее положение мыши от окна браузера
        // и отнимаем то расстояние от хеадера до мыши
        // в итоге окно всегда будет иметь позицию относительно
        // со смещением
        sectionElement.style.left = (e.clientX - layerX) + 'px';
        sectionElement.style.top = (e.clientY - layerY) + 'px';
    }
}

