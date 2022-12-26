const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelectorAll('[data-counter]');
console.log(counter)

btnMinus.addEventListener('click', function(){
  console.log('Minus')
  if (parseInt(counter.textContent) > 1) {
    counter.textContent = --counter.textContent;
  }
});

btnPlus.addEventListener('click', function(){
  
  counter.textContent = ++counter.textContent;
});