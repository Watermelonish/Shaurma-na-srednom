import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {Card, CardContent, Typography, CardActions, Button, TextField} from '@mui/material'
import './BasketElement.css'
import {changeQuantity} from '../../store/actions'
import {InputQuantity} from '../index'
function BasketElement({el}) {

    const dispatch = useDispatch()
    let basket = useSelector((store)=> store.basket)

    const deleteHandler = () => {
        basket = basket.filter(item=>item.id !== el.id)
        dispatch(changeQuantity(basket))
    }
    return (
        <>



            <Card className = 'Card' >
                <CardContent className='Card'>
                    <div>
                        <Typography variant="h5" component="div">
                            Шава
                        </Typography>
                    </div>
                    <div className="MuiInput-root">
                        {/*<TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min:'1', max:'15' }} onChange={quantityHandler}  className = 'inputQuantity' id="standard-basic" type='number' label="количество" variant="standard" />*/}
                         <InputQuantity el={el}/>
                    </div>
                    <div variant="h6" component="div">
                        300г.
                    </div>
                </CardContent>
                <CardActions>
                    <Button onClick={deleteHandler} size="small">Удалить</Button>
                </CardActions>
            </Card>

        </>
    )
}

export default BasketElement
