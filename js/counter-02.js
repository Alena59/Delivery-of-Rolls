window.addEventListener('click', function (event) {
  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
    const counterWrapper = event.target.closest('.counter-wrapper');
    const counter = counterWrapper.querySelector('[data-counter]');
  
    if (event.target.dataset.action === 'plus') {
      counter.textContent = ++counter.textContent;
    }
  
    if (event.target.dataset.action === 'minus') {

      if (parseInt(counter.textContent) > 1) {
        counter.textContent = --counter.textContent;
      } else if (event.target.closest('.cart-wrapper') && parseInt(counter.textContent) === 1) {
        event.target.closest('.cart-item').remove();
        toggleCartStatus();
        calcCartPriceAndDelivery()
      }
  
    }

    //  Проверяем клик на + или - внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
      calcCartPriceAndDelivery();
    }
  }

});