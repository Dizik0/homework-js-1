// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().


// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// // ingredients.map(abc) {
// // const itemLi = document.createElement('li')
// // }
// for (let ingredient of ingredients) {
// const b = document.createElement('li')
//     b.textContent = ingredient[0]
//     ingredient[0] += 1

//    console.log(b)
// }



// const a = document.querySelector('#ingredient')



const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const b = document.querySelector('#ingredients')


const c = ingredients.map(i => {
    const a = document.createElement('li')
    a.textContent = `${i}`
    return a
});
b.append(...c)
