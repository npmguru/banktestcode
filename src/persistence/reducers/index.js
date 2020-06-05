import {combineReducers} from 'redux';
import UserReducer from './user';
import ItemReducer from './item';

const rootReducers = {
    user : UserReducer,
    items : ItemReducer,
}; 


export default combineReducers(rootReducers)