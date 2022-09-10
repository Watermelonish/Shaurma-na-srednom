import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {TextField} from '@mui/material'
// import './BasketElement.css'
import {changeQuantity} from '../../store/actions'


function InputQuantity({el}) {
    let basket = useSelector((store)=> store.basket)
    const dispatch = useDispatch()

    const quantityHandler = (e) => {
        const element = {id:el.id, quantity: e.target.value}
        basket.find(item=>item.id === el.id).quantity = Number(e.target.value)
        dispatch(changeQuantity(basket))
    }

    return (
        <>
            <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min:'1', max:'15' }} onChange={quantityHandler}  className = 'inputQuantity' id="standard-basic" type='number' label="количество" variant="standard" />
        </>
    )
}

export default InputQuantity
