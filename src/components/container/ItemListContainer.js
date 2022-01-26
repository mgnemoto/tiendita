import ItemList from '../items/ItemList'
import './ListContainer.css'
import ItemDetailList from '../itemDetail/ItemDetailList'

function ItemListContainer(props){
    return (
    <>
    <h2 className='animacion'>
        {props.mensaje}
    </h2>
    <div className='mt-2 d-flex justify-content-around'>
        <ItemList/>
    </div>
    <ItemDetailList/>
    </>
    )    
}

export default ItemListContainer