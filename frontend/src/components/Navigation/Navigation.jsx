
import { Link } from 'react-router-dom'


const Navigation = () => {


    return (  
            <nav class="navbar navbar-dark bg-dark">   
            <div class="container-fluid">
            <li class="nav-item">
                <Link to='Main'><button type="button" class="btn btn-secondary">Главная</button></Link>
            </li>
            <li class="nav-item dropdown">   
                <Link to='Shop'><button type="button" class="btn btn-secondary">Товары</button></Link>
            </li>
                </div> 
            </nav>
    )
}

export default Navigation
