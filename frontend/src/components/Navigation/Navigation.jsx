

import { NavLink } from 'react-router-dom'


const Navigation = () => {


    return (
        <>
            <header>
                <NavLink to='main'>Главная</NavLink>
                <NavLink to='shop'>Магазин</NavLink>
                <NavLink to='basket'>Корзина</NavLink>
            </header>
        </>
    )
}

export default Navigation
