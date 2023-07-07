import React, { useState } from 'react'
import './App.css';
import mockUsers from './MockUsers';
import mockApartments from './MockApartments';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ApartmentEdit from './pages/ApartmentEdit';
import ApartmentIndex from './pages/ApartmentIndex';
import ApartmentNew from './pages/ApartmentNew';
import ApartmentProtectedIndex from './pages/ApartmentProtectedIndex';
import ApartmentShow from './pages/ApartmentShow';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';


const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [apartments, setApartments] = useState(mockApartments)




  return (
    <>
      <Header /> 
        <Routes>
          <Route exact path = "/" element={<Home />} />
          <Route path = "/apartments" element={<ApartmentIndex />} />
          <Route path = "/apartments/:id" element={<ApartmentShow current_user={currentUser} apartments={apartments}/>} />
          <Route path = "/newapartment" element={<ApartmentNew />} />
          <Route path = "/editapartment/:id" element={<ApartmentEdit />} />
          <Route path = "/myapartments" element={<ApartmentProtectedIndex />} />
          <Route path = "/signup" element={<SignUp />} />
          <Route path = "/signin" element={<SignIn />} />
          <Route path = "*" element={<NotFound/>} />
        </Routes>
      <Footer />
    </>
  )
}


export default App
