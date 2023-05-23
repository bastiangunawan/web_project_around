let content = document.querySelector('.content');
let love = content.querySelectorAll('.photo-grid__cards-love');

document.getElementById('love').onclick = function() {myFunction()}

function myFunction() {
    document.getElementById('love').src='./images/heart_active.svg';
}