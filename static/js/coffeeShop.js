"use strict";

const addItemToCart = (itemName) => {
  // adds item to cart
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

const resetCart = () => {
  // clears contents in cart
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

const incrementCartTotal = (price) => {
  // increase the total cart value
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

const incrementCoffeeSold = (amountSold) => {
  // increases the # of coffee sales at the top
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

const setProgressAndStatus = (progressVal, statusMsg) => {
  // sets status bar and shows you the progress and the message at bottom
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


// event handler to add item to cart
$('.add-to-order').on('click', () => {
  addItemToCart('Coffee');
  incrementCartTotal(1.50);
});

// event handler to place order
// increment total coffee sold and reset cart
$('#place-order').on('click', () => {

  incrementCoffeeSold($('#cart-items').children().length);
  resetCart();

});

















