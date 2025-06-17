import { useState } from 'react'
 import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePages/Home';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
