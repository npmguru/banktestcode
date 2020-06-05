import { ADD_ITEM,EDIT_ITEM } from '../constant/app';


const ItemMiddleware = {
      addItem:  (itemList) => {
        return async (dispatch) => {
          itemList.unshift('Pending')
          dispatch({type : ADD_ITEM, payload : itemList});
        };
      },
      updateItem:  (itemList, itemIndex, status) => {
        return async (dispatch) => {
          itemList[itemIndex] = status;
          dispatch({type : EDIT_ITEM, payload : itemList});
        };
      }

}


export default ItemMiddleware;