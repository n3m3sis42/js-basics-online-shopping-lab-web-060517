var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * (100 - 1) + 1)
 var item_obj = {}
 item_obj[item] = price
 cart.push(item_obj)
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  // for (var i = 0; i < cart.key.length; i++) {
  //   cart.keys[i]
  // }
  var itemString = "In your cart, you have "
  var itemsAndPrices = cart.map(function(obj) {return `${Object.keys(obj)[0]} at \$${Object.values(obj)[0]}`})

  switch (cart.length) {
    case 0:
      itemString = "Your shopping cart is empty."
      break;
    case 1:
      itemString += `${itemsAndPrices[0]}.`
      break;
    case 2:
      itemString += `${itemsAndPrices.join(" and ")}.`
      break;
    default:
      itemsAndPrices[itemsAndPrices.length - 1] = `and ${itemsAndPrices[itemsAndPrices.length - 1]}`
      itemString += `${itemsAndPrices.join(", ")}.`
  }
  console.log(itemString)
}

function total() {
  return cart.reduce(function(sum, obj) {return sum + Object.values(obj)[0]}, 0)
}

function removeFromCart(item) {
  var updatedCart = cart.filter(function(obj) {return Object.keys(obj)[0] !== item})
  if (updatedCart.length === cart.length) {
    console.log("That item is not in your cart.")
  }
  cart = updatedCart
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
