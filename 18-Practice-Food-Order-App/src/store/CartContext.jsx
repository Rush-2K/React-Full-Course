import { act, createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
});

function cartReducer(state, action){
    if(action.type === 'ADD_ITEM'){
        //... update the state to add the meal item
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id //action item id is the one we are receiving
        );

        //store the old items
        const updatedItems = [...state.items];

        if(existingCartItemIndex > -1){ //if exist
            const existingItem = state.items[existingCartItemIndex]
            const updatedItem = {
                ...existingItem,
                quantity: state.items[existingCartItemIndex].quantity + 1
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        }else{ //if not exist
            updatedItems.push({...action.item, quantity: 1});
        }

        return {...state, items: updatedItems};
    }

    if(action.type === 'REMOVE_ITEM'){
        //... remove an item from the state
    }

    return state;
}

//to wrap other component to use the context
export function CartContextProvider({children}) {
    useReducer(cartReducer, {items: []});

    return <CartContext.Provider>{children}</CartContext.Provider>
}

export default CartContext;