// comando menu mobile
window.onload = function(){
    document.querySelector('.menu-opener').addEventListener('click', function(){
        if(document.querySelector('.menu nav').style.display == 'flex'){
            document.querySelector('.menu nav').style.display = 'none';
        }else{
            document.querySelector('.menu nav').style.display = 'flex';
        }
    });   
}

// slides do começo

let slideIndex = 1;

showSlides(slideIndex);

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName('mainslide');
    let pointers = document.getElementsByClassName('mainpointer');
    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < pointers.length; i++){
        pointers[i].className = pointers[i].className.replace(' active', '');
    }
    slides[slideIndex-1].style.display = 'block';
    pointers[slideIndex-1].className += ' active';
}