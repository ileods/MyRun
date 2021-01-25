src="https://code.jquery.com/jquery-3.5.1.min.js"

$(".dws-form").on("click", ".tab", function() {
    // Удаляем классы active
    $(".dws-form").find(".active").removeClass('active');

    // Добавляем классы active
    $(this).addClass('active');

    $(this).addClass("active");
    $(".tab-form").eq($(this).index()).addClass("active");
});

const condition = document.querySelector('.condition');
const form = document.querySelector('.dws-form');
const formTwo = document.querySelector('.condition-form');
const closeElem = document.querySelector('.close');

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
})
};

init();