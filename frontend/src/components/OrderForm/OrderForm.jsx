import TextareaAutosize from "@mui/base/TextareaAutosize";
import SendIcon from "@mui/icons-material/Send";
import RestaurantSharpIcon from '@mui/icons-material/RestaurantSharp';
import DeliveryDiningSharpIcon from '@mui/icons-material/DeliveryDiningSharp';
import React, {useState} from "react";
import {FormControl, TextField, Select, MenuItem, Button, InputLabel, Chip, Grid} from '@mui/material'
import axios from "axios";
import './OrderForm.css'
function OrderForm() {
    const [theme, setTheme] = useState("");
    const [delivery, setDelivery] = useState(true)
    const handleChange = (event) => {
        setTheme(event.target.value);
    };

    const [input, setInput] = useState({
        customer_name: "",
        customer_phone: "",
        customer_email: "",
        comment:"",
        customer_street: "",
        customer_house: "",
        customer_flat: ""
    });

    const handleInput = (event) => {
        setInput((prev) => ({...prev, [event.target.name] : event.target.value}));
    }

    const createOrder = async () => {
        const response = await axios.post('http://localhost:3100/contacts/sendemail',
            {orderinfo : input}
        )
    }
    const handleDeliveryForm = () => {
    setDelivery(true)
    }
    const handleTakeAwayForm = () => {
        setDelivery(false)

    }
    return (
        <>


    <div className="column-center">
        <FormControl className="orderForm">
            <Grid>
                <Chip color='warning' label="доставка" icon={<DeliveryDiningSharpIcon/>} variant="string" onClick={handleDeliveryForm} />
                <Chip color='warning' label="самовывоз" icon={<RestaurantSharpIcon/>} variant="filled" onClick={handleTakeAwayForm} />

            </Grid>

            <h1>Данные о получателе</h1>

            <label>ФИО: <span className="red">*</span></label>
            <TextField onChange={handleInput}
                       name="customer_name"
                       value={input.customer_name}
                       className="menuItem"
                       required
                       id="username"/>
            <br/>
            <label>телефон: <span className="red">*</span></label>
            <TextField onChange={handleInput}
                       name="customer_phone"
                       value={input.customer_phone}
                       className="menuItem"
                       required
                       id="phone"
                       placeholder=""

            />
            <label>email: <span className="red">*</span></label>

            <TextField onChange={handleInput}
                       name="customer_email"
                       value={input.customer_email}
                       className="menuItem"
                       required
                       id="Email" type="email"
                       placeholder="my-email@mail.ru"

            />

            <br/>
            <label>комментарий к заказу: </label>
            <TextareaAutosize className="textArea" onChange={handleInput}
                              name="comment"
                              value={input.comment}
                              aria-label="minimum height"
                              minRows={7}
                              placeholder="... комментарии к заказу"
                              style={{width: 495}}
            />
            {delivery && (
                <>
                <h1>Адрес доставки</h1>
                <label>улица: </label>
                <TextField onChange={handleInput}
                name="customer_street"
                value={input.customer_street}
                className="menuItem"
                required
                id="Street" type="text"
                placeholder="Рождественская"
                />
                <br></br>
                <label>дом: </label>
                <TextField onChange={handleInput}
                name="customer_house"
                value={input.customer_house}
                className="menuItem"
                required

                           id="House" type="text"
                placeholder="2"
                />
                <br/>

                <label>квартира, офис: </label>
                <TextField onChange={handleInput}
                name="customer_flat"

                value={input.customer_flat}
                className="menuItem"
                required
                id="Flat" type="text"
                placeholder="14"
                />
                </>
                ) }


            <label>Нажимая на кнопку "Сделать заказ!" Вы подтверждаете, что ознакомлены и согласны с политикой конфиденциальности данного сайта, условиями доставки и возврата.</label><br/>
            <Button variant="contained" style={{width: 170}} endIcon={<SendIcon/>} onClick={createOrder}>
                Отправить
            </Button>
        </FormControl>
    </div>
        </>
    )
}
export default OrderForm
