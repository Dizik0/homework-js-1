// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, 
// сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.
const controlsEl = document.querySelector('#controls')
const divBoxEl = document.querySelector('#boxes')
const inputEl = controlsEl.firstElementChild
const buttonAddEl = inputEl.nextElementSibling
const buttonDelEl = controlsEl.lastElementChild

    let width = 30
    let height = 30
    
const createBoxes = (amount) => {
    amount = inputEl.value
 
    for (let i = 0; i < amount; i++){
        const divEl = document.createElement("div")
        let r = () => Math.random() * 256;
        divEl.classList.add = ('cal')
        divEl.style.width = `${width}px`
        divEl.style.height = `${height}px`
        divEl.style.backgroundColor = 'red'
        divBoxEl.append(divEl)
        divEl.style.background = `rgb(${r()}, ${r()}, ${r()})`;
        height = height + 10;
        width = width + 10;
    }
}
  
const destroyBoxes = (amount) => {
   
   divBoxEl.innerHTML = ''
}

buttonDelEl.addEventListener('click', destroyBoxes)
buttonAddEl.addEventListener('click', createBoxes)





























