function calcCartPriceAndDelivery() {
  const cartWrapper = document.querySelector('.card-wrapper');
  const cartItems = document.querySelectorAll('.cart-item');
  const totalPriceEl = document.querySelector('.total-price');
  const deliveryCost = document.querySelector('.delivery-cost');
  const cartDelivery = document.querySelector('[data-cart-delivery]');

  let priceTotal = 0;
  cartItems.forEach(function (item) {
    const amountEl = item.querySelector('[data-counter]');
    const priceEl = item.querySelector('.price__currency');

    priceTotal += parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
  });

  // отображаем цену на странице
  totalPriceEl.innerText = priceTotal;

  // Скрываем / Показываем блок со стоимостью доставки
  if (priceTotal > 0) {
    cartDelivery.classList.remove('none');
  } else {
    cartDelivery.classList.add('none');
  }


  if (priceTotal >=600) {
    deliveryCost.classList.add('free');
    deliveryCost.innerText = 'бесплатно';
  } else {
    deliveryCost.classList.remove('free');
    deliveryCost.innerText = '250 ₽';
  }
}