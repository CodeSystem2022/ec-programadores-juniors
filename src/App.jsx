
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavbarComponent from './components/Navbar'

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<NavbarComponent />} />

        </Routes>
      
    </>
  )
}

export default App
