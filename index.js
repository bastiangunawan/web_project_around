const edit = document.querySelector('.profile__button-edit');
/*const pages = document.querySelector('.page');*/
const pop = document.querySelector('.pop-up');
const close = document.querySelector('.pop-up__close');
const save = document.querySelector('.pop-up__save');
const names = document.querySelector('.profile__info-names');
const jobs = document.querySelector('.profile__info-jobs')
const input = document.querySelector('input[id="names"]');
const input2 = document.querySelector('input[id="jobs"]');
const love1 = document.querySelector('#love-1');
const love2 = document.querySelector('#love-2');
const love3 = document.querySelector('#love-3');
const love4 = document.querySelector('#love-4');
const love5 = document.querySelector('#love-5');
const love6 = document.querySelector('#love-6');

edit.addEventListener('click', () => {
    /*pages.classList.add('page__pop-up');*/
    pop.classList.add('pop-up__active');
});
close.addEventListener('click', () => {
    pop.classList.remove('pop-up__active');
});
save.addEventListener('click', () => {
    names.innerHTML = input.value;
    jobs.innerHTML = input2.value;
    pop.classList.remove('pop-up__active');
});

love1.addEventListener('click', myFunction1);
love2.addEventListener('click', myFunction2);
love3.addEventListener('click', myFunction3);
love4.addEventListener('click', myFunction4);
love5.addEventListener('click', myFunction5);
love6.addEventListener('click', myFunction6);

function myFunction1() {
    document.querySelector('#love-1').src='./images/heart_active.svg';
}

function myFunction2() {
    document.querySelector('#love-2').src='./images/heart_active.svg';
}

function myFunction3() {
    document.querySelector('#love-3').src='./images/heart_active.svg';
}

function myFunction4() {
    document.querySelector('#love-4').src='./images/heart_active.svg';
}

function myFunction5() {
    document.querySelector('#love-5').src='./images/heart_active.svg';
}

function myFunction6() {
    document.querySelector('#love-6').src='./images/heart_active.svg';
}
