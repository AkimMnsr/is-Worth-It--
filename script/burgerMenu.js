/* Manage burger menu */

const icone = document.querySelector('.navbar-mobile i')
const modale = document.querySelector('.modal');

icone.addEventListener('click', function(){
    modale.classList.toggle('change-modal')
    icone.classList.toggle('fa-xmark');
})

/* Manage accordeon */

const questions = document.querySelectorAll('.question');
console.log(questions)

questions.forEach((item) => {
    item.addEventListener('click', function(){
        const next = item.nextElementSibling;
        next.classList.toggle('visible');
        icone = item.lastElementChild
        icone.classList.toggle('fa-chevron-up');
    })
});