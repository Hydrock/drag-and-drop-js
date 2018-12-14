# Drag And Drop

See example https://github.com/Hydrock/drag-and-drop-js

<div style="text-align:center">
    <img src="https://raw.githubusercontent.com/Hydrock/drag-and-drop-js/master/src/assets/hand-mini.png" 
    />
    <h3>Плагин дает возможность перетаскивать элементы</h3>
</div>


Установка

```javascript
npm i
```

Использование

```javascript
import dragAndDrop from '@hydrock/drag-and-drop';

// секция, которую нужно перетащить
var sectionElement = document.querySelector('section');
// элемент за который необходимо потянуть [необязательный]
var headerElement = document.querySelector('header');

dragAndDrop(sectionElement, headerElement);
```
