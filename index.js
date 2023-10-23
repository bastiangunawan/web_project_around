const edit = document.querySelector('.profile__button-edit');
const pop = document.querySelector('.pop-up');
const body = document.querySelector('.body');
const close = document.querySelector('.pop-up__close');
const form = document.querySelector('.pop-up__container');
const names = document.querySelector('.profile__info-names');
const jobs = document.querySelector('.profile__info-jobs')
const inputNames = document.querySelector('input[id="names"]');
const inputJobs = document.querySelector('input[id="jobs"]');
const addCards = document.querySelector('.profile__button-add');
const popAdd = document.querySelector('.pop-add');
const closes = document.querySelector('.pop-add__close');
const nameValue = document.querySelector('.photo-grid__cards-text');
const urlsValue = document.querySelector('photo-grid__cards-item');
const formAdd = document.querySelector('.pop-add__container');
const inputPlace = document.querySelector('input[id="place"]');
const inputPict = document.querySelector('input[id="pict"]')
const template = document.querySelector('template');
const photoGrid = document.querySelector('.photo-grid');

const data = [
    {
        image: './images/Kaldera-Prapat-1.jpg',
        title: 'Kaldera Parapat',
    },

    {
        image: './images/Kaldera-Prapat-2.jpg',
        title: 'Kaldera Parapat',
    },

    {
        image: './images/Kaldera-Prapat-3.jpg',
        title: 'Kaldera Parapat',
    },

    {
        image: './images/Tara-Bunga.jpg',
        title: 'Taram Bunga',
    },

    {
        image: './images/Hotel-Niagara-Prapat.jpg',
        title: 'Hotel Niagara Parapat',
    },

    {
        image: './images/Hotel-Niagara-Prapat-View.jpg',
        title: 'Hotel Niagara Parapat',
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

addCards.addEventListener('click', () =>{
    popAdd.classList.add('pop-add--active');
});
closes.addEventListener('click', () =>{
    popAdd.classList.remove('pop-add--active');
});
formAdd.addEventListener('submit', (e) => {
    e.preventDefault();
    cloneTemplate(
        inputPict.value,
        inputPlace.value,        
    )
    popAdd.classList.remove('pop-add--active');
});    

function handleDel(trash) {
    trash.addEventListener('click', () => {
        const gridPhoto = trash.closest('.photo-grid__cards')
        gridPhoto.remove()
    })
}

function cloneTemplate(image, title){
    const clone = template.content.cloneNode(true);

    const trash = clone.querySelector('.photo-grid__delete');
    const gridImages = clone.querySelector('.photo-grid__cards-item');
    const gridText = clone.querySelector('.photo-grid__cards-text');
    const gridLove = clone.querySelector('.photo-grid__cards-love');

    gridImages.src = image;
    gridText.textContent = title;

    gridLove.addEventListener('click', (e) =>{
        e.target.classList.toggle('photo-grid__cards-love--active');
        e.target.classList.toggle('photo-grid__cards-love');
    });

    photoGrid.appendChild(clone);

    handleDel(trash)
} 

function renderCards(){
    photoGrid.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        cloneTemplate(
            data[i].image,
            data[i].title,
        )
    }
}

renderCards()
