import { useReducer, useCallback } from 'react';
import { CartContext } from './CartContextDefinition';

const FREE_DELIVERY_THRESHOLD = 300;
const DELIVERY_FEE = 25;

const initialState = {
  items: [],
  isOpen: false,
  toastMessage: '',
  toastVisible: false,
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { id, name, price, serving = 'Külah', quantity = 1, image } = action.payload;
      const existingIndex = state.items.findIndex(
        (item) => item.id === id && item.serving === serving
      );

      let newItems;
      if (existingIndex >= 0) {
        newItems = state.items.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newItems = [...state.items, { id, name, price, serving, quantity, image }];
      }

      return { ...state, items: newItems };
    }

    case 'REMOVE_ITEM': {
      const { id, serving } = action.payload;
      return {
        ...state,
        items: state.items.filter((item) => {
          if (serving !== undefined) {
            return !(item.id === id && item.serving === serving);
          }
          return item.id !== id;
        }),
      };
    }

    case 'UPDATE_QUANTITY': {
      const { id, serving, quantity } = action.payload;
      if (quantity < 1) return state;
      return {
        ...state,
        items: state.items.map((item) => {
          const match =
            item.id === id && (serving === undefined || item.serving === serving);
          return match ? { ...item, quantity } : item;
        }),
      };
    }

    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };

    case 'OPEN_CART':
      return { ...state, isOpen: true };

    case 'CLOSE_CART':
      return { ...state, isOpen: false };

    case 'SHOW_TOAST':
      return { ...state, toastMessage: action.payload, toastVisible: true };

    case 'HIDE_TOAST':
      return { ...state, toastVisible: false };

    case 'CLEAR_CART':
      return { ...state, items: [] };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const subtotal = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const deliveryFee = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const total = subtotal + deliveryFee;
  const freeDeliveryRemaining = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal);
  const freeDeliveryProgress = Math.min(
    100,
    (subtotal / FREE_DELIVERY_THRESHOLD) * 100
  );

  const addItem = useCallback((item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
    dispatch({
      type: 'SHOW_TOAST',
      payload: `🍨 ${item.name} (${item.serving} x ${item.quantity}) sepete eklendi!`,
    });
  }, []);

  const quickAdd = useCallback((name, price, serving = 'Külah', image, id) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { id, name, price, serving, quantity: 1, image },
    });
    dispatch({
      type: 'SHOW_TOAST',
      payload: `✨ ${name} (${serving}) sepete eklendi!`,
    });
  }, []);

  const removeItem = useCallback((id, serving, name) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, serving } });
    if (name) {
      dispatch({
        type: 'SHOW_TOAST',
        payload: `🗑️ ${name} (${serving}) sepetten çıkarıldı.`,
      });
    }
  }, []);

  const updateQuantity = useCallback((id, serving, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, serving, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const value = {
    items: state.items,
    isOpen: state.isOpen,
    toastMessage: state.toastMessage,
    toastVisible: state.toastVisible,
    dispatch,
    itemCount,
    subtotal,
    deliveryFee,
    total,
    freeDeliveryRemaining,
    freeDeliveryProgress,
    addItem,
    quickAdd,
    removeItem,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
