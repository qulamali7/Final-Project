import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import FindDoctor from './pages/FindDoctor'
import Login from './pages/Login'
import DoctorDetail from './pages/DoctorDetail'
import Register from './pages/Register'
import Departments from './pages/Departments'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>} />
            <Route path='/findDoctor' element={<FindDoctor/>}/>
            <Route path='/detail/:id' element={<DoctorDetail/>}/>
            <Route path='/departments' element={<Departments/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
