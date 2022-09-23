//getting container
const container = document.querySelector('.container');
console.log(container);
container.addEventListener('click', e => {
    if(e.target.classList.contains('column') && !e.target.classList.contains('column booked')){
        e.target.classList.toggle('booked')
    }
})