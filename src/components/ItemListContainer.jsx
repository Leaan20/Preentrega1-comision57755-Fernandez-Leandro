
import './ItemListContainer.css'
import Title from './Title.jsx'
//Al utilizar el export deafault en el momento de creacion de la funcion, no hace falta hacerlo abajo aparte.
export default function ItemListContainer(){//respetar el nombre del componente , sea igual que la funcion
    return (<>
                <Title greeting='Bienvenidos a DuckWave' />
                <h2 className='subtitle'>Encontra todo lo necesario para surfear</h2>
        </>)
}