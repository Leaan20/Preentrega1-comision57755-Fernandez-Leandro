import './NavBar.css' //importar estilos

//importamos otros componentes
import ButtonComponent from './ButtonComponent';
import LogoBrand from './LogoBrand';
import CartWidget  from './CartWidget';

//Ejemplo de componente de composicion.(engloba otros componentes)
//Utilizar fragments cuando son mas de un elemento.

export default function NavBar(){
    return (<>
    <nav className='nav'>
        <div className='logoDiv'>
            <LogoBrand />
        </div>
        <div>
            {/* utilizando props en el componente padre. text */}
            <ul className='list'>
                <ButtonComponent text='Nosotros' color='#E4B52C
'/>
                <ButtonComponent text='Productos' color='#E4B52C
'/>
                <ButtonComponent text='contacto' color='#E4B52C
'/>
            </ul>
        </div>
        <div className='carritoContainer'>
            <CartWidget />
        </div>
    </nav>
 </>)
}

// Props: forma en la cual un componente padre pueda compartir acciones con sus elementos hijos.
