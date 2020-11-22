

let real0 = document.querySelector('.real0');
let real1 = document.querySelector('.real1');
let real2 = document.querySelector('.real2');
let real3 = document.querySelector('.real3');
let real4 = document.querySelector('.real4');
let real5 = document.querySelector('.real5');
let real6 = document.querySelector('.real6');
let real7 = document.querySelector('.real7');
let real8 = document.querySelector('.real8');
let nosReal = document.querySelector('.nos-realisations');
let boutonSuivant = document.querySelector('.apres');
let boutonPrecedent = document.querySelector('.avant');

let actif =[];
actif.push(document.querySelector('.real0'));
let tabInactive = [real0,real1,real2,real3,real4,real5,real6,real7,real8];

real0.id = 'active';


boutonSuivant.addEventListener('click',()=>{
    

    scrollRight();      
});

boutonPrecedent.addEventListener('click',()=>{

    scrollLeft(); 
});

let scrollRight = ()=>{

    
        if(actif[0] != real8){
          
           
            
            
            actif[0].nextElementSibling.style.transform = 'translateX(0%)';
            actif[0].nextElementSibling.style.transition = 'transform 3s';
            actif[0].nextElementSibling.style.display = 'flex';
            actif[0].nextElementSibling.setAttribute('id','active');
            actif[0].setAttribute('id','');
            
            
            actif.push(actif[0].nextElementSibling);
           
            actif.shift();
            
             

        }
        
        
        
       
};

let resetScrollRight = ()=>{

   
    actif.push(nosReal.firstElementChild);
    real0.setAttribute('id','active');
    

    actif.shift();
    real8.setAttribute('id','');


    

};

let scrollLeft = ()=>{

    
    if(nosReal.children.id = 'active'){
        if(real0.id != 'active'){

            
            actif[0].style.transform = 'translateX(100%)';
            actif[0].style.transition = 'transform 3s';

            actif[0].previousElementSibling.setAttribute('id','active');
         
            actif[0].setAttribute('id','');
            
            
            actif.push(actif[0].previousElementSibling);
            
            actif.shift();
             

        }else{
            
        }
    }   

};



