

import { NavLink } from 'react-router-dom'


const Navigation = () => {


    return (
        <>
            <header>
                <NavLink to='Main'>Главная</NavLink>
                <NavLink to='Shop'>Магазин</NavLink>
                <NavLink to='Contacts'> Контактная Информация</NavLink>
            </header>
        </>
    )
}

export default Navigation
