import ShoppingCart from '../CartWiged';
import './style.css'


function NavBar(){
    return(
        <nav className="flexBar">
            <button className="navButton">Home</button>
            <button className="navButton">Catálogo</button>
            <ShoppingCart/>
        </nav>
    )
}

export default NavBar;