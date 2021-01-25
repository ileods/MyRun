const condition = document.querySelector('.condition');
const form = document.querySelector('.dws-form');
const formTwo = document.querySelector('.condition-form');
const closeElem = document.querySelector('.close');
const checkbox = document.querySelector('input[type="checkbox"]');
const sumbit = document.querySelector('.button');

const init = () =>{
condition.addEventListener('click', event => {
    event.preventDefault();
    formTwo.classList.add('visible');
    form.classList.add('visible');
});
closeElem.addEventListener('click', event => {
    event.preventDefault();
    formTwo.classList.remove('visible');
    form.classList.remove('visible');
});

sumbit.addEventListener('click', function(){
    if (checkbox.classList.contains(':not(:checked)')){
        alert('Ознакомтесь с условиями регистрации!');
    }
})

$('input[type="submit"]').click(function(){
    if( $('input[type="checkbox"]').is(':checked') ) {
       // Галочка стоит
    } else {
        alert('Ознакомтесь с условиями регистрации!');
    }
 });
};

init();