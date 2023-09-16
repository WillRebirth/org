
import { useState } from 'react';
import { v4 as uuid} from "uuid";
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
      equipo: "Front End",
      foto: "https://github.com/willrebirth.png",
      nombre: "Nicolas Martinez",
      puesto: "Aprendiz",
      id: uuid(),
      fav: false
},
{
  equipo: "Devops",
      foto: "https://www.giantbomb.com/a/uploads/scale_small/1/15777/458007-cc107pe.jpg",
      nombre: "Sergio",
      puesto: "Frozen Flame",
      id: uuid(),
      fav: false
},
{
  equipo: "Programación",
      foto: "https://images.saymedia-content.com/.image/t_share/MTg4ODM5ODM1NzI5ODY0MjI0/how-to-recruit-kid-in-chrono-cross.jpg",
      nombre: "Kid",
      puesto: "Pata Sucia",
      id: uuid(),
      fav: false
},
{
  equipo: "Móvil",
      foto: "https://i.pinimg.com/originals/d1/fb/2c/d1fb2cf19b2f4f8ad28f261e2f0897d4.jpg",
      nombre: "Harle",
      puesto: "Mon Amour",
      id: uuid(),
      fav: true
},
{
  equipo: "Innovacion y Gestion",
      foto: "https://www.giantbomb.com/a/uploads/scale_medium/1/15777/456685-lynx.jpg",
      nombre: "LINX",
      puesto: "Villano",
      id: uuid(),
      fav: false
}])

const [equipos, actualizarEquipos] = useState([

  {
    id: uuid(),
    titulo:"Programación",
    colorPrimario: "#57C278",
    colorSecundario: "#D9F7E9"

  },
  {
    id: uuid(),
    titulo:"Front End",
    colorPrimario: "#82CFFA",
    colorSecundario: "#E8F8FF"

  },
  {
    id: uuid(),
    titulo:"Data Science",
    colorPrimario: "#A6D157",
    colorSecundario: "#F0F8E2"

  },
  {
    id: uuid(),
    titulo:"Devops",
    colorPrimario: "#E06B69",
    colorSecundario: "#FDE7E8"

  },
  {
    id: uuid(),
    titulo:"UX y Diseño",
    colorPrimario: "#DB6EBF",
    colorSecundario: "#FAE9F5"

  },
  {
    id: uuid(),
    titulo:"Móvil",
    colorPrimario: "#FFBA05",
    colorSecundario: "#FFF5D9"

  },
  {
    id: uuid(),
    titulo:"Innovacion y Gestion",
    colorPrimario: "#FF8A29",
    colorSecundario: "#FFEEDF"
  },    
])




  // TERNARIO -----> condicion ? se muestra : NO SE MUESTRA

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //REGISTRAR COLABORADOR

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborado" , colaborador)
    //SPREAD OPERATOR
    actualizarColaboradores([...colaboradores,colaborador])
  }

  //ELIMINAR COLABORADOR

  const eliminarColaborador = (id) =>{
    console.log("Eliminar Colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //ACTUALIZAR COLOR DE EQUIPO 
const actualizarColor = (color, id) => {
  console.log("Actualizar : ", color, id )
  const equiposActualizados = equipos.map((equipo) => {
    if(equipo.id === id){
      equipo.colorPrimario = color
    }
    return equipo
  })

  actualizarEquipos(equiposActualizados)
}


//CREAR EQUIPO 
const crearEquipo = (nuevoEquipo) => {
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid}])
}

const like = (id) => {
  console.log("like", id)
  const colaboradoresActualizados = colaboradores.map((colaborador) => {
    if(colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })
  actualizarColaboradores(colaboradoresActualizados)
}


  //LISTA DE EQUIPOS 



  return (
    <div>
      <Header />
      {/*mostrarFormulario === true ? <Formulario/> : <></> */}
      {
      mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)} 
          registrarColaborador = {registrarColaborador}
          crearEquipo = {crearEquipo}
        />
        
      }
      
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
        equipos.map( (equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador ={eliminarColaborador}
          actualizarColor = {actualizarColor}
          like = {like}  
          />
        )
      }

      <Footer/>

    </div>
  );
}

export default App;
