const openForm = document.querySelector('.ram');
const clickedForm = document.querySelector('.open-ram-click');
const svgForm = document.querySelector('.open-ram');
const clickedCross = document.querySelector('.close');
const toggleSort = document.querySelector('.sort');
const toggleForm = document.querySelector('.choice');
const toggleLike = document.querySelector('.like');
const appElem = document.querySelector('.app');



const init = () => {

  clickedForm.addEventListener('click', event => {
    event.preventDefault();
    window.scrollTo(0, 0);
    openForm.classList.add('visible');
    clickedForm.style.display="none";
    toggleSort.style.display="none";
    if (toggleForm.classList.contains('active')){
      toggleForm.classList.remove('active');
    }

    appElem.classList.add('up');
  });
  clickedCross.addEventListener('click', event => {
    event.preventDefault();
    openForm.classList.remove('visible');
    clickedForm.style.display="block";
    toggleSort.style.display="block";
    appElem.classList.remove('up');
  });

  toggleSort.addEventListener('click', function(){
    toggleForm.classList.toggle('active');
  })

  window.addEventListener('scroll', function() {
    let scroll = pageYOffset;
    if (scroll>110){
      toggleSort.style.cssText=`margin-top:-10%;`;
      svgForm.style.cssText=`margin-top:-10.8%;`;
      toggleForm.style.cssText=`margin-top:-4.5%;`;
    }
    if (scroll<150){
      toggleSort.style.cssText=`margin-top:2%;`;
      svgForm.style.cssText=`margin-top:1.8%;`;
      toggleForm.style.cssText=`margin-top:7.5%;`;
    }
  });

};

init();