import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ItemMiddleware from '../../../core/api/iteam-action';

const Iteam = (props) => {
    const itemColor = (props.status === 'Pending') ? 'bg-danger' : 'bg-success';
    const updateStatus = (props.status === 'Pending') ? 'Completed' : 'Pending';
    const dispatch = useDispatch();
    const  { itemList }  = useSelector(state => state.items);

    return (
        <div className={`card text-center ${itemColor} text-white m-3 col-md-3`} 
        onClick={() => dispatch(ItemMiddleware.updateItem(itemList,props.id,updateStatus))}>
            <div className="card-body">
            <h3>{props.itemName}</h3>
            <h4 className="display-4">
                {
                    (props.status === 'Pending') ? (<i className="fas fa-thumbs-down"></i>)
                    : (<i className="fas fa-thumbs-up"></i>)
                } 
            </h4>
            <a href="javascript:void(0)" className="btn btn-outline-light btn-sm">{props.status}</a>
            </div>
        </div>

    );
}


export default Iteam;