module.exports = function (moveElement, moveHandler) {
    var layerX = 0, layerY = 0;

    if (!moveHandler) {
        moveHandler = moveElement;
    }

    moveElement.ondragstart = function() {
        return false;
    };

    function startDrag (type, e, moveElement) {
        moveElement.style.position = 'absolute';
        
        // говорим о том что moveElement перетаскивается
        moveElement.draggable = true;
    
        // Добавляем обработчик на движение
        if (type === 'click') {
            // layerX,layerY - это позиция мыши относительно таргета (не окна браузера)
            layerX = e.layerX;
            layerY = e.layerY;
            document.addEventListener('mousemove', setWindowPosition);
        } else if (type === 'touch') {
            layerX = parseInt((e.touches[0].clientX - e.target.parentNode.offsetLeft), 10);
            layerY = parseInt((e.touches[0].clientY - e.target.parentNode.offsetTop), 10);
            document.addEventListener('touchmove', setWindowPosition);
        }
    }

    function stopDrag (moveElement) {
        // выключаем перетаскивание
        moveElement.draggable = false;
        document.removeEventListener('mousemove', setWindowPosition);
        document.removeEventListener('touchmove', setWindowPosition);
    }
    
    function setWindowPosition(e) {
        if (!moveElement.draggable) return;
    
        if (e.type === 'mousemove') {
            // e.buttons - какие кнопки мыши нажаты - 1 это левая
            // если нажата левая кнопка мыши и элемент перетаскивается
            if (e.buttons === 1) {
                // вычисляем стили для окна
                // берем текущее положение мыши от окна браузера
                // и отнимаем то расстояние от хеадера до мыши
                // в итоге окно всегда будет иметь позицию относительно
                // со смещением
                moveElement.style.left = (e.clientX - layerX) + 'px';
                moveElement.style.top = (e.clientY - layerY) + 'px';
            }
        } else if (e.type === 'touchmove') {
            moveElement.style.left =
                parseInt((e.touches[0].clientX - layerX), 10) + 'px';
            moveElement.style.top =
                parseInt((e.touches[0].clientY - layerY), 10) + 'px';
        }
    }

    // Зажимаем мышь на заголовке
    moveHandler.addEventListener('mousedown', (e) => {
        startDrag('click', e, moveElement);
    });

    // Касаемся заголовка
    moveHandler.addEventListener('touchstart', (e) => {
        startDrag('touch', e, moveElement);
    });

    document.addEventListener('mouseup', () => {
        stopDrag(moveElement);
    });
    
    document.addEventListener('touchend', () => {
        stopDrag(moveElement);
    });
}
