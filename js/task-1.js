const listOfCategories = document.querySelectorAll('.item');
listOfCategories.forEach((heading) =>{
    console.log(`Категория ${heading.querySelector('h2').textContent}`);
    console.log(`Количество ${heading.querySelectorAll('li').length}`)
})