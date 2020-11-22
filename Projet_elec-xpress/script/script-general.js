let allMenu = document.querySelector('.menu')

let allMenuLink = document.querySelectorAll('.menu-container');
let menu = document.querySelector('.menu-container-item').firstElementChild;
let sousMenu = document.querySelector('.sous-menu');

const boutonMenu = document.createElement('div');

let body  = document.querySelector('body');
let clef = false;
let firstElement = body.firstElementChild.nextElementSibling;
let secondElement = body.firstElementChild.nextElementSibling.nextElementSibling;
let thirdElement = body.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;
let tab = [firstElement,secondElement,thirdElement];

let header = document.querySelector('header');

for( let i= 0; i<tab.length;i++){


    tab[i].addEventListener('click',()=>{

        if( sousMenu.style.display == 'flex' && window.innerWidth <= 770 || window.innerWidth <= 1025 ){
            sousMenu.style.display = ' none';
            sousMenu.style.opacity = '0';
            sousMenu.style.cursor = 'none';
            
        }
    })
}




window.onload = document.querySelector('header').style.animation = 'slideDown 2s';
    
    if(window.innerWidth <= 770 || window.innerWidth <= 1025){

        menu.addEventListener('click',()=>{
        
            if( clef == false ){
                clef = true;
                sousMenu.style.display = 'flex'; 
                sousMenu.style.flexWrap = 'nowrap';
                sousMenu.style.height = ' max-content';
                sousMenu.style.zIndex = '2';
                sousMenu.style.opacity = '1';
                sousMenu.style.cursor ='pointer';
                sousMenu.style.visibility = 'visible';
            }else{
                sousMenu.style.display = ' none';
                sousMenu.style.opacity = '0';
                sousMenu.style.cursor = 'none';
                sousMenu.style.position = 'absolute';
                clef = false
            }
        });

    }else if(window.innerWidth >= 770){

        menu.addEventListener('hover',()=>{
        
            if( clef == false){
                clef = true;
                sousMenu.style.display = 'flex'; 
                sousMenu.style.flexWrap = 'nowrap';
                sousMenu.style.height = ' max-content';
                sousMenu.style.zIndex = '2';
                sousMenu.style.opacity = '1';
                sousMenu.style.cursor ='pointer';
                sousMenu.style.visibility = 'visible';
            }else{
                sousMenu.style.display = ' none';
                sousMenu.style.opacity = '0';
                sousMenu.style.cursor = 'none';
                sousMenu.style.visibility = 'hidden';
                sousMenu.style.position = 'absolute';
                clef = false
            }
    
        });
    }



    let createButton = () =>{ 

        boutonMenu.classList.add('inactive');
        
        boutonMenu.style.width = '40px';
        boutonMenu.style.height = '40px';
        boutonMenu.style.backgroundColor = 'transparent';
        boutonMenu.style.position = 'absolute';
        boutonMenu.style.zIndex = '10';
        boutonMenu.style.left = '19rem';
        boutonMenu.style.top = '15px';
        boutonMenu.style.zIndex = '20';
        boutonMenu.style.cursor = ' pointer';  
    }
   
   if(window.innerWidth <=414){

        createButton();
        header.insertBefore(boutonMenu,allMenu);
  
   boutonMenu.addEventListener('click',()=>{

    if(boutonMenu.className === 'inactive'){
        
        allMenu.style.transform ='translateX(0)';
        allMenu.style.transition = 'transform 5s easeInOut';
        allMenu.style.position = 'absolute';   
        allMenu.style.display ='flex';
        allMenu.style.zIndex = '3';
        allMenu.style.opacity = '1';
        allMenu.style.visibility = 'visible';
        
        boutonMenu.classList.remove('inactive');
        boutonMenu.classList.add('active');
       
        
    }
    else if(boutonMenu.className ==='active'){
        
        allMenu.style.transform ='translateX(100%)';
        allMenu.style.transition = 'transform 5s easeInOut';
        allMenu.style.opacity = '0';
        allMenu.style.zIndex = '0';
        allMenu.style.visibility = 'hidden';
        allMenu.style.display = ' none';
        allMenu.style.cursor = 'none';

        boutonMenu.classList.remove('active');
        boutonMenu.classList.add('inactive');
        
    }
   })

   } 


    
    