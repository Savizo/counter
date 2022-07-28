// let numberEl = document.getElementById('number');
// let addEl = document.querySelector('.add-count');
// let lowerEl = document.querySelector('.lower-count');
// let count = 0;

// addEl.addEventListener('click', () => {
//   if (count >= 0) {
//     numberEl.style.color = 'green'
//   } 
//   count++;  
  
//   document.querySelector('.number').textContent = count;
// });

// lowerEl.addEventListener('click', () => {
//   if (count <= 0) {
//     numberEl.style.color = 'red'
//   }
//   count--;
//   document.querySelector('.number').textContent = count;
// })


const buttons = document.querySelectorAll('.counterBtn')
let count = 0

// Add event listener and functionailty to each button
buttons.forEach(function(button){
  button.addEventListener('click', () => {
    if(button.classList.contains('lower-count')) {
      count--
    } else if(button.classList.contains('add-count')) {
      count++
    }

    // Select the count text
    const counter = document.querySelector('.number')
    counter.textContent = count

    if (count < 0) {
      counter.style.color = 'red'
    } else if (count > 0) {
      counter.style.color = 'green'
    } else {
      counter.style.color = 'rgb(67, 74, 74)'
    }
  })
})