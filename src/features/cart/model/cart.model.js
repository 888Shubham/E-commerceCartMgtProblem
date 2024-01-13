// Please don't change the pre-written code
// Import the necessary modules here


let cartId = 0;
export class cartModel {
  constructor(userId, productId, quantity) {
    this.id = ++cartId;
    this.userId = userId;
    this.productId = productId;
    this.quantity = Number(quantity);
  }
}
const cartItems = [new cartModel(1, 2, 5), new cartModel(3, 3, 10)];

export const addToCart = (userId, productId, quantity) => {
  // Write your code here
  const cartItem = new cartModel(
    userId,
    productId,
    quantity
  );
   cartItems.push(cartItem);
   return cartItem;
};

export const removeFromCart = (userId, cartItemId) => {
  // Write your code here
  // const item = cartItems.find((i) => i.id== cartItemId && i.userId == userId);
  const cartItemIndex = cartItems.findIndex((i) => i.id == cartItemId && i.userId == userId);
  if(cartItemIndex == -1) return null;
  else {
    const item =cartItems.splice(cartItemIndex,1)[0];
    return item;
  }
};
