import { SET_PRODUCTS} from "../actions/productAction";

const initialState = {
    products :[] ,
}

const productReducers = (state = initialState , actions)=>{
    switch(actions.type){
        case SET_PRODUCTS :
        return {...state ,products: actions.payload } ;
        default:
            return state ;
    }
};

export default productReducers;