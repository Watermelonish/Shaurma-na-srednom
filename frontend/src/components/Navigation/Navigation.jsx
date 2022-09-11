

import { NavLink } from 'react-router-dom'


const Navigation = () => {


    return (
        <>
            <header>

                <NavLink to='main'>Главная</NavLink>
                <NavLink to='shop'>Магазин</NavLink>
                <NavLink to='basket'>Корзина</NavLink>
                <NavLink to='Contacts'> Контактная Информация</NavLink>
            </header>
        </>
    )
}

export default Navigation
