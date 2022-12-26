function toggleCartStatus () {
  const cartWrapper = document.querySelector('.cart-wrapper');
  const cardEmptyBadge = document.querySelector('[data-cart-empty]');

  const orderForm = document.querySelector('#order-form');
  console.log(cartWrapper.children.length);

  if (cartWrapper.children.length > 0) {
    cardEmptyBadge.classList.add('none');
    orderForm.classList.remove('none');
  } else {
    cardEmptyBadge.classList.remove('none');
    orderForm.classList.add('none');
  }
}