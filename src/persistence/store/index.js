import { createStore,applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers';
import reduxThunk from 'redux-thunk';

const persistConfig = {
 key: 'root',
 storage: storage,
};
const pReducer = persistReducer(persistConfig, rootReducer);

export const APP_STORE  = createStore(pReducer,{},applyMiddleware(reduxThunk));
export const PERSIST_STORE = persistStore(APP_STORE);