import './ButtonComponent.css'
    //aplicando las props, en este caso 'text' es la prop, las props llegan envueltas en objetos, entonces utilizando las llaves, alojamos ese objeto en una variable con el mismo nombre

export default function ButtonComponent({text, color}) {

    //funcion manejadora
    const handleClick= () => {
        alert(`Estas ingresando a ${text}`)
    }

                    //evento={nombreFuncion}
    return (
        <button onClick={handleClick} className="button" style={{backgroundColor:color}}>{text}
        </button>
    );

}
