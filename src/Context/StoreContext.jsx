import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const [id, setId] = useState(0);
  const url = "https://artvista-backend-1zpu.onrender.com";
  const [art_list, setArtList] = useState([]);

  useEffect(() => {
    async function getData() {
      //fetching the data
      fetchData();
      //getting the token
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        getCartData(localStorage.getItem("token"));
      }
    }
    getData();
  }, []);

  //fetching the art item data

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}/api/arts/get-art`);
      setArtList(response.data.data);
     // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //getting the cart data
  const getCartData = async (token) => {
    try {
      const response = await axios.post(
        `${url}/api/cart/getCart`,
        {},
        { headers:{ token }}
      );
      setCartItems(response.data.cartData);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

  //adding to the cart

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(
        `${url}/api/cart/addToCart`,
        { itemId },
        { headers: { token } }
      );
    }
  };
  //removing from cart data

  const removeFromCart = async (itemId) => {
    if (cartItems[itemId] > 0) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
    if (token) {
      await axios.post(
        `${url}/api/cart/removeFromCart`,
        { itemId },
        { headers: { token } }
      );
    }
  };

  //get total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    //getting cart item value by for in loop
    for (const key in cartItems) {
      //cart item value greater than 0
      if (cartItems[key] > 0) {
        //checking art item id is equal to cart item id
        let itemDetail = art_list.find((product) => product._id == key);
        //calculating total amount by getting art price  and cart items quantity
       console.log(itemDetail.price)
       totalAmount += itemDetail.price * (cartItems[key]);
      }
    }
    console.log(totalAmount)
    return totalAmount;
  };
  const contextValue = {
    cartItems,
    setCartItems,
    token,
    setToken,
    id,
    setId,
    url,
    art_list,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
