# Drag And Drop
![](https://github.com/Hydrock/drag-and-drop-js/blob/master/src/assets/hand.png)

**Плагин дает возможность перетаскивать элементы**

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