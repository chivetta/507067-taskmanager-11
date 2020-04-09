'use strict';

// ОСНОВНЫЕ БЛОКИ

import {getTemplateOfMenu} from "./components/menu.js";
import {getTemplateOfFilter} from "./components/filter.js";
import {getTemplateOfBoard} from "./components/board.js";

// ДОСКА ЗАДАЧ

import {getTemplateOfBoardFilter} from "./components/board-filter.js";
import {getTemplateOfTasksContainer} from "./components/task-container.js";
import {getTemplateOfLoadButton} from "./components/load-button.js";

// КАРТОЧКИ

import {getTemplateOfCardEditor} from "./components/card-editor.js";
import {getTemplateOfTaskCard} from "./components/task-card.js";

// КОНСТАНТЫ

const NUMBER_OF_CARDS = 3;

// ФУНКЦИЯ РЕНДЕРА

const renderElement = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

// ОТРИСОВКА ОСНОВНЫХ БЛОКОВ

const main = document.querySelector(`.main`);
const mainControl = main.querySelector(`.main__control`);

renderElement(mainControl, getTemplateOfMenu());
renderElement(main, getTemplateOfFilter());
renderElement(main, getTemplateOfBoard());

// ОТРИСОВКА ДОСКИ ЗАДАЧ

const board = main.querySelector(`.board`);

renderElement(board, getTemplateOfBoardFilter());
renderElement(board, getTemplateOfTasksContainer());
renderElement(board, getTemplateOfLoadButton());

// ОТРИСОВКА КАРТОЧЕК

const boardTasks = main.querySelector(`.board__tasks`);

renderElement(boardTasks, getTemplateOfCardEditor());

for (let i = 0; i < NUMBER_OF_CARDS; i++) {
  renderElement(boardTasks, getTemplateOfTaskCard());
}
