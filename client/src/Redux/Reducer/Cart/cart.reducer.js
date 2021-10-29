import {GET_CART,ADD_CART,DELETE_CART, INCREMENT_CART,DECREMENT_CART} from "./cart.type";

const INITIAL_STATE={
    cart :[]
}

const cartReducer = (state= INITIAL_STATE, action)=>{
    switch (action.type){
        case GET_CART:
            return{
                ...state,
                cart:action.payload
            }
            case ADD_CART:
                return{
                    ...state,
                    cart:action.payload
                }
                case DELETE_CART:
                    return{
                        ...state,
                        cart:action.payload
                    }
                    case INCREMENT_CART:
                        return{
                            ...state,
                            cart:action.payload
                        }
                        case DECREMENT_CART:
                            return{
                                ...state,
                                cart:action.payload
                            };
                            default:
                                return{
                                    ...state
                                }
    }
};

export default cartReducer;