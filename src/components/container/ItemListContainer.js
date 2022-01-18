import ItemCount from '../itemcount/ItemCount'
import './ListContainer.css'

function ItemListContainer(props){
    return (
    <>
    <h2>
        {props.mensaje}
    </h2>
    <ItemCount stock={8} initial={0}/>
    </>
    )    
}

export default ItemListContainer