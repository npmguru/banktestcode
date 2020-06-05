  
import {ADD_ITEM,EDIT_ITEM} from '../../core/constant/app';

const INITIAL_STATE = {
    itemList:['Completed','Pending','Pending']
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case ADD_ITEM : 
            return {...state,itemList:action.payload};
        case EDIT_ITEM : 
            return {...state,itemList:action.payload};
        default:
            return state;

    }
}