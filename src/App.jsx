import './App.css'
import { Route, Routes } from 'react-router-dom'
import CategoriaTable from './pages/categoria/CategoriaTable'
import About from './pages/about/About'
import CategoriaForm from './pages/categoria/CategoriaForm'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<CategoriaTable />} />
        <Route path="/categoria/novo" element={<CategoriaForm />} /> 
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
