import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Browse from './pages/Browse'
import Businesses from './pages/Businesses'
import Organizations from './pages/Organizations'
import ServiceProviders from './pages/ServiceProviders'
import BusinessListing from './pages/BusinessListing'
import Homepage from './pages/Homepage'
import UserPage from './pages/UserPage'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
    <Nav />

     <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/browse" element={<Browse />}/>
      <Route path="/listing" element={<BusinessListing />}/>
      <Route path="/businesses" element={<Businesses />}/>
      <Route path="/organizations" element={<Organizations/>}/>
      <Route path="/serviceproviders" element={<ServiceProviders />}/>
     </Routes>

     <UserPage />

     <Footer />
    </>
  )
}

export default App
