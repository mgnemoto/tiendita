import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/container/ItemListContainer';

const greetings = "Bienvenidos a la tiendita"

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer mensaje={greetings}/>
    </>
  );
}

export default App;
