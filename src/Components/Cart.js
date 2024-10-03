import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList';
import { allCartItems } from '../utils/redux/cartSlice';

const Cart = () => {
    const items = useSelector(allCartItems);

  return (
    <div>
        <ItemList list_data={items}/>
    </div>
  )
}

export default Cart