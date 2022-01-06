import './style.css'
import carrito from "../assets/carrito blanco.svg"

function NavBar(){
    return(
        <nav className="flexBar">
            <button>Home</button>
            <button>Catálogo</button>
            <button><img src={carrito} alt='Carrito'/></button>
        </nav>
    )
}

export default NavBar;