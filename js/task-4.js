// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;
const boxAddAndDeletEl = document.querySelector('#counter');
const valueEl = document.querySelector('#value')

const decrement = () => {
    const counter = counterValue -= 1;
    return valueEl.textContent = counter;
};
const increment = () => {
    const counter = counterValue += 1;
    return valueEl.textContent = counter;
};

boxAddAndDeletEl.firstElementChild.addEventListener('click', decrement) 
boxAddAndDeletEl.lastElementChild.addEventListener('click', increment)  
 
 