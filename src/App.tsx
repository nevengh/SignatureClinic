import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import ContactUs from './pages/ContactUs/ContactUs'
import ServiceProfile from './pages/ServiceProfile/ServiceProfile'
import DoctorProfile from './pages/DoctorProfile/DoctorProfile'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
   <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about-us' element={<About/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/service-profile' element={<ServiceProfile/>} />
        <Route path='/doctor-profile' element={<DoctorProfile/>} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
   </>
  )
}

export default App