import ItemList from '../items/ItemList'
import './ListContainer.css'

function ItemListContainer(props){
    return (
    <>
    <h2>
        {props.mensaje}
    </h2>
    <div className='mt-2 d-flex justify-content-around'>
        <ItemList/>
    </div>
    </>
    )    
}

export default ItemListContainer