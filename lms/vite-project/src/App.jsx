import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/pages/HeroSection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FacultyDashboard from './components/pages/FacultyDashboard';
import ToggleRegister from './components/pages/ToggleRegister';
import AdminRegister from './components/admin/AdminRegister';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminLogin from './components/admin/AdminLogin';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/'  Component={<HeroSection/>}/>
        <Route path='/dashboard'  Component={<FacultyDashboard/>}/>
        <Route path='/about'  Component={<ToggleRegister/>}/>
        <Route path='/adminregister'  Component={<AdminRegister/>}/>
        <Route path='/admindashboard'  Component={<AdminDashboard/>}/>
        <Route path='/adminlogin'  Component={<AdminLogin/>}/>
        <HeroSection />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;