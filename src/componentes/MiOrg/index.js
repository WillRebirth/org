import {useState} from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado ---- Hooks
    //useState
    //useState()
    // const [nombreVariable, funcionActualizar] = useState(valorInicial)

    //const [mostrar, actualizarMostrar] = useState(true)

    //const manejarClick = () => {
      //  console.log("mostrar/ocultar elemento")
        //actualizarMostrar(!mostrar)
    //}

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="mi org" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg