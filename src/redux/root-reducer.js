import { combineReducers } from "redux";
import userReducer from "./user/userReducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import directoryReducer from "./directory/directoryReducer";
import shopReducer from "./shop/shopReducer";
import cartReducer from "./cart/cartReducer";
import wishlistReducer from "./wishlist/wishlistReducer";
import collectionItemReducer from "./collectionItemDetail/collectionItemReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "wishlist", "collectionItem"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
  wishlist: wishlistReducer,
  collectionItem: collectionItemReducer,
});

export default persistReducer(persistConfig, rootReducer);
