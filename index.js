const edit = document.querySelector('.profile__button-edit');
const pop = document.querySelector('.pop-up');
const body = document.querySelector('.body');
const close = document.querySelector('.pop-up__close');
const form = document.querySelector('.pop-up__container');
const names = document.querySelector('.profile__info-names');
const jobs = document.querySelector('.profile__info-jobs')
const inputNames = document.querySelector('input[id="names"]');
const inputJobs = document.querySelector('input[id="jobs"]');
const add = document.querySelector('.profile__button-add');
const popAdd = document.querySelector('.pop-add');
const closes = document.querySelector('.pop-add__close');
const nameValue = document.querySelector('.photo-grid__cards-text');
const ursValue = document.querySelector('photo-grid__cards-item');
const formAdd = document.querySelector('.pop-add__container');
const inputPlace = document.querySelector('.input[id="place"]');
const inputPict = document.querySelector('input[id="pict"]')
const template = document.querySelector('template');
const photoGrid = document.querySelector('.photo-grid');

const data = [
    {
        image: './images/Kaldera-Prapat-1.jpg',
        title: 'Kaldera Parapat',
        love: './images/heart.svg',
    },

    {
        image: './images/Kaldera-Prapat-2.jpg',
        title: 'Kaldera Parapat',
        love: './images/heart.svg',
    },

    {
        image: './images/Kaldera-Prapat-3.jpg',
        title: 'Kaldera Parapat',
        love: './images/heart.svg',
    },

    {
        image: './images/Tara-Bunga.jpg',
        title: 'Taram Bunga',
        love: './images/heart.svg',
    },

    {
        image: './images/Hotel-Niagara-Prapat.jpg',
        title: 'Hotel Niagara Parapat',
        love: './images/heart.svg',
    },

    {
        image: './images/Hotel-Niagara-Prapat-View.jpg',
        title: 'Hotel Niagara Parapat',
        love: './images/heart.svg',
    },
]

edit.addEventListener('click', () => {
    pop.classList.add('pop-up--active');
});
close.addEventListener('click', () => {
    pop.classList.remove('pop-up--active');
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    names.textContent = inputNames.value;
    jobs.textContent = inputJobs.value;
    pop.classList.remove('pop-up--active');
});

add.addEventListener('click', () =>{
    inputNames.value = names.textContent;
    inputJobs.value = jobs.textContent;
    popAdd.classList.add('pop-add--active');
});
closes.addEventListener('click', () =>{
    popAdd.classList.remove('pop-add--active');
});
formAdd.addEventListener('submit', (e) => {
    e.preventDefault();
    data.push({
        name: inputPlace.value,
        title: inputPict.value,
    })
    renderCards()
    popAdd.classList.remove('pop-add--active');
});


function loveActive() {
    this.classList.add('photo-grid__cards-love--active');
}

function renderCards(){
    photoGrid.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        const clone = template.content.cloneNode(true);
    
        /*const gridCards = clone.querySelector('.photo-grid__cards');*/
        const gridImages = clone.querySelector('.photo-grid__cards-item');
        const gridText = clone.querySelector('.photo-grid__cards-text');
        const gridLove = clone.querySelector('.photo-grid__cards-love');
    
        gridImages.src = data[i].image;
        gridText.innerHTML = data[i].title;
        gridLove.src = data[i].image;
    
        gridLove.addEventListener('click', loveActive);
    
        photoGrid.appendChild(clone);
    }
}

renderCards()