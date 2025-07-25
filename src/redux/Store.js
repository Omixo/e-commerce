import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import productSaga from './sagas/productSaga';

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(productSaga);

export default store;
