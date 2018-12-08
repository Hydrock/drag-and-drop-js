// Находим сам элемент окна и его хеадер
var sectionElement = document.querySelector('section');
var headerElement = document.querySelector('header');

// Просто для примера устанавливаем стили
sectionElement.style.left = '100px';
sectionElement.style.top = '100px';

var layerX, layerY;

// элемент перетаскивается или нет (в данный момент)
var draggable = false;

function startDrag (type, e) {
    // говорим о том что окно перетаскивается
    draggable = true;

    // Добавляем обработчик на движение
    if (type === 'click') {
        // layerX,layerY - это позиция мыши относительно таргета (не окна браузера)
        layerX = e.layerX;
        layerY = e.layerY;
        document.addEventListener('mousemove', setWindowPosition);
    } else if (type === 'touch') {
        layerX = parseInt((e.touches[0].clientX - e.target.parentNode.offsetLeft), 10);
        layerY = parseInt((e.touches[0].clientY - e.target.parentNode.offsetLeft), 10);

        document.addEventListener('touchmove', setWindowPosition);
    }
}

function stopDrag () {
    // выключаем перетаскивание
    draggable = false;
    document.removeEventListener('mousemove', setWindowPosition);
    document.removeEventListener('touchmove', setWindowPosition);
}

// Зажимаем мышь на заголовке
headerElement.addEventListener('mousedown', function(e) {
    startDrag('click', e);
});

// Касаемся заголовка
headerElement.addEventListener('touchstart', function(e) {
    startDrag('touch', e);
});

document.addEventListener('mouseup', function() {
    stopDrag();
});

document.addEventListener('touchend', function() {
    stopDrag();
});

function setWindowPosition(e) {
    if (!draggable) return;

    console.log(e.touches[0]);

    if (e.type === 'mousemove') {
        // e.buttons - какие кнопки мыши нажаты - 1 это левая
        // если нажата левая кнопка мыши и элемент перетаскивается
        if (e.buttons === 1) {
            // вычисляем стили для окна
            // берем текущее положение мыши от окна браузера
            // и отнимаем то расстояние от хеадера до мыши
            // в итоге окно всегда будет иметь позицию относительно
            // со смещением
            sectionElement.style.left = (e.clientX - layerX) + 'px';
            sectionElement.style.top = (e.clientY - layerY) + 'px';
        }
    } else if (e.type === 'touchmove') {

        //console.log(e)
        sectionElement.style.left = (e.touches[0].clientX - layerX) + 'px';
        sectionElement.style.top = (e.touches[0].clientY - layerY) + 'px';
    }
}

