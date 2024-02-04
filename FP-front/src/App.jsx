import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import FindDoctor from './pages/FindDoctor'
import Login from './pages/Login'
import DoctorDetail from './pages/DoctorDetail'
import Register from './pages/Register'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>} />
            <Route path='/findDoctor' element={<FindDoctor/>}/>
            <Route path='/detail/:id' element={<DoctorDetail/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
