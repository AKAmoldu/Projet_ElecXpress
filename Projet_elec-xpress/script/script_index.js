let descriptionGris = document.querySelector('.description-gris-1');
let descriptionBlanc = document.querySelector('.description-blanc');
let descriptionGris2 = document.querySelector('.description-gris-2');

const largeur = Math.ceil(window.innerWidth);

window.addEventListener('scroll',()=>{

    const scrolled = Math.ceil(window.scrollY);
    
    if(scrolled >=327 && largeur >= 1025){
        descriptionGris.style.animation = 'slideLeft 3s';
    }
    if(scrolled >= 608 && largeur >= 1025){
        descriptionBlanc.style.animation ='slideRight 3s'
    }
    if(scrolled >= 972 && largeur >= 1025){
        descriptionGris2.style.animation ='slideLeft 3s';
    }
    
});