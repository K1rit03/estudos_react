

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Inicio from './Paginas/inicio';
import SobreMmim from './Paginas/Sobremim';
import Menu from './componentes/Menu';
console.log(window.location)
const pagina = window.location.pathname === '/'  ? <Inicio/>: <SobreMmim/>



function App() {
  return(
  <BrowserRouter>
    <Menu />
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/sobremim' element={<SobreMmim/>}/>
        <Route path='*' element={<div>Página nao encontrada</div>}/>
      </Routes>
 </BrowserRouter>
  )
  

  
}

export default App
