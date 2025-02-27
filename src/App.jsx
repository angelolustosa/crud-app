import { useState } from 'react'
import './App.css'
import TableComponent from './component/table/TableTemplate'
import { Route, Routes } from 'react-router-dom'
import CategoriaTable from './pages/categoria/CategoriaTable'
import About from './pages/about/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path="/" element={<CategoriaTable />} />
        <Route path="/categoria" element={<CategoriaForm />} /> 
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
