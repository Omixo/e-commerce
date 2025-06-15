
import { ADD_TO_CART } from '../actions/cartAction'; 
const initialState = {
    cartItems:[] ,
};

const cartReducer = (state = initialState ,actions)=>{
    switch(actions.type){
        case ADD_TO_CART :
            const existingProduct  = state.cartItems.find(
                (item)=> item.id === actions.payload.id

            );
             if(existingProduct){
                return {
                    ...state,
                    cartItems: state.cartItems.map((item)=>
                        item.id === actions.payload.id
                    ?{...items , quantity:item.quantity+1}
                    : item 

                    ),
                };
             }else{

                 return {
                     ...state , 
                     cartItems:[...state.cartItems , {...actions.payload , quantity:1}],
                 }

             }    
            
            default :
            return state;
    }
    
};

export default cartReducer;