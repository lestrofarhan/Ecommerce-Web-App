import { create } from "zustand";


const calcTotalItems = (arr)=>{
  let total = 0;
      for (const id in arr) {
        for (const size in arr[id]) {
          total += +(arr[id][size]);
        }
  }
  return total
}

const useCartContext = create((set) => ({
  cartItems: {},
  totalPrice: 0,
  addToCart: (itemId, size) =>
    set((state) => {
      const cartCopy = structuredClone(state.cartItems);
      if (cartCopy[itemId]) {
        cartCopy[itemId][size] = (cartCopy[itemId][size] || 0) + 1;
      } else {
        cartCopy[itemId] = {};
        cartCopy[itemId][size] = 1;
      }

      return {
        cartItems: cartCopy,
        totalItems: calcTotalItems(cartCopy),
      };
    }),
  removeFromCart: (itemId, size) =>
    set((state) => {
      const cartCopy = structuredClone(state.cartItems);
      if (cartCopy[itemId] && cartCopy[itemId][size]) {
        delete cartCopy[itemId][size];
        if (Object.keys(cartCopy[itemId]).length === 0) {
          delete cartCopy[itemId]; // remove product if no sizes left
        }
      }
      return {
        cartItems: cartCopy,
        totalItems: calcTotalItems(cartCopy),
      };
    }),
  updateQuantity: (itemId, size, newQty) =>
    set((state) => {
      const cartCopy = structuredClone(state.cartItems);
      if (newQty > 0) {
        cartCopy[itemId][size] = +(newQty);
      }

      
      return {
        cartItems: cartCopy,
        totalItems: calcTotalItems(cartCopy),
      };
    }),
    updateTotalPrice: (total)=>{set({totalPrice: total})}
}));


export default useCartContext