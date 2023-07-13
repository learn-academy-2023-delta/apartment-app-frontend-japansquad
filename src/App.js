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
  const [currentUser, setCurrentUser] = useState(mockUsers[1])
  const [apartments, setApartments] = useState(mockApartments)

  const logout = () => {
    return setCurrentUser(null)
  }

  const login = (userInfo) => {
    console.log(login)
  }

  const signup = (userInfo) => {
    console.log(signup)
  }

  console.log(currentUser)
  return (
    <>
      <Header currentUser={currentUser} logout={logout}/> 
        <Routes>
          <Route exact path = "/" element={<Home />} />
          <Route path = "/apartments" element={<ApartmentIndex apartments={apartments}/>} />
          <Route path = "/apartments/:id" element={<ApartmentShow current_user={currentUser} apartments={apartments}/>} />
          <Route path = "/newapartment" element={<ApartmentNew />} />
          <Route path = "/editapartment/:id" element={<ApartmentEdit />} />
          {currentUser && (
            <Route path = "/myapartments" element={<ApartmentProtectedIndex  currentUser={currentUser} apartments={apartments}/>}/>
          )}
          <Route path = "/signup" element={<SignUp signup={signup} />} />
          <Route path = "/signin" element={<SignIn login={login}/>} />
          <Route path = "*" element={<NotFound/>} />
        </Routes>
      <Footer />
    </>
  )
}


export default App
