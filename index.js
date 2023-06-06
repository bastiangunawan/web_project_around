const edit = document.querySelector('.profile__button-edit');
const pop = document.querySelector('.pop-up');
const body = document.querySelector('.body');
const close = document.querySelector('.pop-up__close');
const save = document.querySelector('.pop-up__save');
const names = document.querySelector('.profile__info-names');
const jobs = document.querySelector('.profile__info-jobs')
const inputNames = document.querySelector('input[id="names"]');
const inputJobs = document.querySelector('input[id="jobs"]');

edit.addEventListener('click', () => {
    pop.classList.add('pop-up--active');
    body.classList.add('body--active');
});
close.addEventListener('click', () => {
    pop.classList.remove('pop-up--active');
    body.classList.remove('body--active');
});
save.addEventListener('click', () => {
    names.innerHTML = inputNames.value;
    jobs.innerHTML = inputJobs.value;
    pop.classList.remove('pop-up--active');
    body.classList.remove('body--active');
});

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

function loveActive() {
    this.classList.add('photo-grid__cards-love--active')
}

for (let i = 0; i < 6; i++) {
    const clone = template.content.cloneNode(true);

    const gridCards = clone.querySelector('.photo-grid__cards');
    const gridImages = clone.querySelector('.photo-grid__cards-item');
    const gridText = clone.querySelector('.photo-grid__cards-text');
    const gridLove = clone.querySelector('.photo-grid__cards-love');

    gridImages.src = data[i].image;
    gridText.innerHTML = data[i].title;
    gridLove.src = data[i].image;

    gridLove.addEventListener('click', loveActive);

    photoGrid.appendChild(clone);
}