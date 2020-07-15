import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.redecur";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
