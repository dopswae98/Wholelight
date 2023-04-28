import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const userAuthContext = createContext();
// const UserContainerContext = () => {
//   return <div></div>;
// };

// export default UserContainerContext;

export function UserAuthContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [visibility, setVisibility] = useState(false);
  function AddToCart(item) {
    setCart([...cart, item]);
    toast.success("Product Added Succesfully");
  }
  function handleClose() {
    setVisibility(false);
  }
  function removeFromCart(item) {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== item.id);
    setCart(hardCopy);
    toast.error("Product Remove Succesfully");
  }

  return (
    <userAuthContext.Provider
      value={{
        AddToCart,
        cart,
        setCart,
        visibility,
        setVisibility,
        handleClose,
        removeFromCart,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
