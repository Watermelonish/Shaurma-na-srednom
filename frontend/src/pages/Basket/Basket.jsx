import React from 'react'
import { useSelector } from 'react-redux';
import {BasketElement} from '../../components'
import {Stack} from '@mui/material'
import './Basket.css'
function Basket() {
    const basket = useSelector((store)=> store.basket)
    console.log(basket.map(el=>{return el.id}), 'all id')
    return (
        <>
            <Stack>
            {basket.map((el,index) => (
                    <BasketElement key ={index} el={el}></BasketElement>

                )
            )}
            </Stack>
        </>
    )
}

export default Basket
