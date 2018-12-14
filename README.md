# Drag And Drop
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

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