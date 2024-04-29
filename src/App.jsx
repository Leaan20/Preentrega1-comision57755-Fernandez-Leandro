import './App.css'
import ItemListContainer from './components/ItemListContainer.jsx'
import NavBar from './components/NavBar.jsx'
import CountComponent from './components/CountComponent.jsx'


function App() {

  return (
    <>
      <NavBar />
        <div className='bienvenida'>
          <ItemListContainer />
          <CountComponent />
        </div>



    </>
  )
}

export default App
