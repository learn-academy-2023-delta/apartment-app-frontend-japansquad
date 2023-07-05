import React, { useState } from 'react'
import './App.css';
import mockUsers from './MockUsers';
import mockApartments from './MockApartments';

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [apartments, setApartments] = useState(mockApartments)
  return (
    <div>Apartment App</div>
  )
}

export default App
