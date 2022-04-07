const items = document.querySelectorAll('.slider img');
const nbslide = items.length;
const suivant = document.querySelector('.suivant');
const precedent = document.querySelector('.precedent');
let count = 0;

function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbslide - 1){
        count++;
    }
    else {
        count = 0;
    }

    items[count].classList.add('active');
}

suivant.addEventListener('click', slideSuivante);

function slidePrecedente(){
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    }
    else {
        count = nbslide - 1;
    }

    items[count].classList.add('active');
}

precedent.addEventListener('click', slidePrecedente);

setInterval(slideSuivante, 5000);
