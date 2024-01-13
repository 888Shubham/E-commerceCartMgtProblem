// Please don't change the pre-written code
// Import the necessary modules here
import {addToCart, removeFromCart} from '../model/cart.model.js'
export const addToCartController = (req, res) => {
  // Write your code here
  const {productId, quantity} = req.query;
  const userId = req.userId;
  // console.log("productId=",productId + "quantity=", quantity + "userId=",userId);
  const item = addToCart(userId, productId,quantity);
  // console.log("added item =", item);
  res.status(201).json({success: true, item: item});

};

export const removeFromCartController = (req, res) => {
  // Write your code here
  const userId = req.userId;
  const cartItemId = req.params.itemId;
  // console.log("userId=", userId + "cartItemId =", cartItemId);
  const err = removeFromCart(userId, cartItemId);
  if(!err) return res.status(404).json({success: false, msg: "operation not allowed"});
  return res.status(200).json({success: true, deletedCartItem: err,});
};
