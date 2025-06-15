
import {  createStore,applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import productReducers from './reducers/productReducer'
import productSaga from './sagas/productSaga'
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
    product:productReducers , 
    cart:cartReducer ,
});
// create the saga middleware
const sagaMiddleware = createSagaMiddleware() ;

const store = createStore(rootReducer  , applyMiddleware(sagaMiddleware))

// then run the saga
// sagaMiddleware.run(mySaga)
sagaMiddleware.run(productSaga)
// render the application

export default store ;