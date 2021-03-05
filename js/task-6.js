// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.


// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputEl = document.querySelector('#validation-input')

const fn1 = (add, remove) => {
    inputEl.classList.add(add)
    inputEl.classList.remove(remove)
}

const fn = () => {
    if(Number(inputEl.dataset.length) !== Number(inputEl.value.length)) {
       fn1('invalid', 'valid')
    }
     else{
        fn1('valid', 'invalid')
    }
}
inputEl.addEventListener('input', fn)

