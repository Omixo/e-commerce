import axios from "axios";
import { GET_PRODUCTS , setProducts } from "../actions/productAction";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

function* fetchProducts (){
    try {
        // action call krdege jo set krega loader = true
const response = yield call(axios.get, 'https://fakestoreapi.com/products');
        // action call krdege jo set krega loader = false

        yield put(setProducts(response.data));
    } catch (error) {
        // action call krdege jo set krega loader = false   
        console.error("Error fetching products" , error)
    }
}

export default function* productSaga(){
    yield takeLatest(GET_PRODUCTS, fetchProducts)
}