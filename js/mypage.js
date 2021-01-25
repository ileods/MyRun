const openForm = document.querySelector('.ram');
const clickedForm = document.querySelector('.open-ram-click')
const clickedCross = document.querySelector('.close');
const appElem = document.querySelector('.app');


const init = () => {


  clickedForm.addEventListener('click', event => {
    event.preventDefault();
    window.scrollTo(0, 0);
    openForm.classList.add('visible');
    clickedForm.style.display="none";
    appElem.classList.add('up');

  });
  clickedCross.addEventListener('click', event => {
    event.preventDefault();
    openForm.classList.remove('visible');
    clickedForm.style.display="block";
    appElem.classList.remove('up');

  });



  document.title = document.querySelector('.name').innerText;
};

var inputs = document.querySelectorAll('.inputfile');
Array.prototype.forEach.call(inputs, function(input)
  {
    var label	 = input.nextElementSibling,
    labelVal = label.innerHTML;
    input.addEventListener('change', function(e)
      {
        var fileName = '';
        if(this.files && this.files.length > 1)
        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
        else
        fileName = e.target.value.split( '\\' ).pop();
        if( fileName )
        label.querySelector('span').innerHTML = fileName;
        else
        label.innerHTML = labelVal;
});
})
init();
