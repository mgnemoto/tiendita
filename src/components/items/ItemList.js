import './Items.css'
import Item from './Item'
import { useEffect,useState } from 'react'

const DULCES =[
    {id: 1,
    nombre: "Brownie de Oreo",
    precio: 250,
    foto: "oreo"
    },
    {id: 2,
    nombre: "Brownie de Dulce",
    precio: 200,
    foto: "ddl"
    },
    {id: 3,
    nombre: "Brownie de Nutella",
    precio: 300,
    foto: "nutella"
    }
]

const getDulces = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => 
            resolve(DULCES), 4000);
        })
    }

function ItemList(){
    const [postres, setPostres] = useState([]);

    useEffect(()=>{
        getDulces()
        .then((data)=>setPostres(data))
        .catch((error)=>console.error(error))
    }, []);




     return(
        <>
        {postres.map((dulce)=> (<Item key={dulce.id} postre={dulce}/>)  
        )}
        </>
     )   
}
export default ItemList

