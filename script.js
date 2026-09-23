const rateEl = document.querySelectorAll('.rate');
const submitBtn = document.querySelector('#submit');
const ratingContainer = document.querySelector('.rating-container');
const thankContainer = document.querySelector('.thank-container');
const ratingNum = document.querySelector('#rating');

rateEl.forEach(rate => {
    rate.addEventListener('click', () => {
        rateEl.forEach(r => r.classList.remove('active'));
        rate.classList.add('active');
    })
})

submitBtn.addEventListener('click', () => {
   const selectedRate = document.querySelector('.rate.active');

   if(!selectedRate) {
    alert('Please select a rating before submitting.');
   } else {
       ratingContainer.style.display = 'none';
       thankContainer.style.display = 'flex';
       
       ratingNum.textContent = selectedRate.textContent;
   }
    

   

})