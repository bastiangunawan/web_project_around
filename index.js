const edit = document.querySelector('.profile__button-edit');
const pop = document.querySelector('.pop-up');
const body = document.querySelector('.body');
const close = document.querySelector('.pop-up__close');
const form = document.querySelector('.pop-up__container');
const names = document.querySelector('.profile__info-names');
const jobs = document.querySelector('.profile__info-jobs')
const inputNames = document.querySelector('input[id="names"]');
const inputJobs = document.querySelector('input[id="jobs"]');

edit.addEventListener('click', () => {
    inputNames.value = names.textContent;
    inputJobs.value = jobs.textContent;
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