import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/container/ItemListContainer';

const greetings = "Bienvenidos a mi tiendita"

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer mensaje={greetings}/>
    </>
  );
}

export default App;
