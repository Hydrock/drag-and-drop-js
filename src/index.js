import dragAndDrop from '../index.js';

var sectionElement = document.querySelector('.section_1');
var headerElement = document.querySelector('.header_1');
var sectionElement2 = document.querySelector('.section_2');

dragAndDrop(sectionElement, headerElement);
dragAndDrop(sectionElement2);