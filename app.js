//getting container
const container = document.querySelector('.container');
//getting movies
const movie = document.getElementById('movie');
// getting movie value for creating ticket price
let ticketPrice = movie.value;
// console.log(ticketPrice);
//total no of seats
const totalSeat = document.querySelectorAll('.row .column.booked');
//getting total no of booked seats and amount
const noOfBookedSeat = document.getElementById('bookSeat');
noOfBookedSeat.innerHTML = totalSeat.length;
//getting amount
const amount = document.getElementById('amount');
amount.innerHTML = ticketPrice

//function for updating total no of seats and price
function updateSeat(){
    const totalSeat = document.querySelectorAll('.row .column.booked');
    // console.log(totalSeat.length);
    noOfBookedSeat.innerHTML = totalSeat.length;
    // console.log('ticket price'+ ticketPrice);
    amount.innerHTML = ticketPrice * noOfBookedSeat.innerHTML

}
//add event listener for calculating ticket price
movie.addEventListener('change', e => {
    ticketPrice = +e.target.value
    // console.log('ticket price'+ ticketPrice);
    amount.innerHTML = ticketPrice * noOfBookedSeat.innerHTML;
})

// add event listener for booking and cancelling seats
container.addEventListener('click', e => {
    if(e.target.classList.contains('column') && !e.target.classList.contains('column booked')){
        e.target.classList.toggle('booked');
        updateSeat()
    }
});