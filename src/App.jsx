import './App.css'
import Header from './components/Header/HeaderNav'
import Sobre_mi from './components/Page/Sobre mi/Sobremi'
import MisRedes from './components/Page/Redes/Redes'
import MiExperiencia from './components/Page/Experiencia/Experiencia'
import MiSkills from './components/Page/Skills/Miskills'
import MyProjects from './components/Page/Proyecto/Misproyecto'
import MyContacto from './components/Page/Contacto/Contacto'
import Footer from './components/Footer/Footer'




function App() {
  return (
    <div className='app'>
      <Header/>
     <MisRedes/>
     <div id='Sobre_mi'><Sobre_mi/></div>
     <div id="MiExperiencia"><MiExperiencia/></div>
     <div id="MiSkills"><MiSkills/></div>
<div id="MiProyectos">
 <MyProjects/>
</div>
<div id="contacto">
  <MyContacto/>
</div>
<Footer/>
    </div>
  )
}

export default App
