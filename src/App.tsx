import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Web3 from './pages/Web3'
import Fullstack from './pages/Fullstack'
import AIPage from './pages/AIPage'
import Cyber from './pages/Cyber'

// import AIPage from './pages/AIPage'


function App() {
  

  return (
    <div>
       <BrowserRouter>
            <Routes>
                <Route element={<Dashboard></Dashboard>} path='/'></Route>
                <Route element={<Web3></Web3>} path='/Web3'></Route>
                <Route element={<Fullstack></Fullstack>} path='/Fullstack'></Route>
                <Route element={<AIPage></AIPage>} path='/AI'></Route>
                <Route element={<Cyber></Cyber>} path='/Cy'></Route>
                
            </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
