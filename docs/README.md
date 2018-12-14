# Drag And Drop

**Плагин дает возможность перетаскивать элементы**

Установка

```javascript
npm i
```

Использование

```javascript
import * as dragAndDropObject from '@hydrock/drag-and-drop';
const dragAndDrop = dragAndDropObject.default;

// секция которую нужно перетащить
var sectionElement = document.querySelector('section');
// элемент за который необходимо потянуть
var headerElement = document.querySelector('header');

dragAndDrop(sectionElement, headerElement);
```