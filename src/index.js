import * as dragAndDropObject from '../index.js';
const dragAndDrop = dragAndDropObject.default;

var sectionElement = document.querySelector('.section_1');
var headerElement = document.querySelector('.header_1');
var sectionElement2 = document.querySelector('.section_2');

dragAndDrop(sectionElement, headerElement);
dragAndDrop(sectionElement2);