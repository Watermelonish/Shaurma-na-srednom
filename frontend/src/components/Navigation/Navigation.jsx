
import { Link, NavLink } from 'react-router-dom'


const Navigation = () => {


    return (
        <>
            <header>
                <NavLink to='Main'>Главная</NavLink>
                <NavLink to='Shop'>Магазин</NavLink>
            </header>
        </>
    )
}

export default Navigation
