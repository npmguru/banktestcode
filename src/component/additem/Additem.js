import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import ItemMiddleware from '../../core/api/iteam-action'



const Additem = () => {

    const dispatch = useDispatch();
    const  { itemList }  = useSelector(state => state.items);
    return (
        <section id="actions" className="py-4 mb-4 bg-light">
            <div className="container">
            <div className="row">
                <div className="col-md-3">
                <a href="javascript:void(0)" 
                className="btn btn-primary btn-block" 
                onClick={() => dispatch(ItemMiddleware.addItem(itemList))}>
                    <i className="fas fa-plus"></i> Add Item
                </a>
             </div>
            </div>
            </div>
        </section>
    );
}

export default Additem;