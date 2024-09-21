import './main.css';
import BurgerMenu from './scripts/BurgerMenu';
import { burgerData } from '../data/constants';

// burger
const burgerMenu = new BurgerMenu(burgerData);

// eventListeners
burgerMenu.setEventListeners();

console.log(`
[v] Вёрстка соответствует макету. Ширина экрана 768px +26
[v] Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12
[v] На ширине экрана 768рх реализовано адаптивное меню +12 
`);