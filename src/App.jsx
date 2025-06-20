// App.jsx
import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Videos from './pages/Videos/Videos'

function App() {
  const [sidebar, setSidebar] = useState(true)

return (
  <div>
    <h1 style={{ color: 'red' }}>App is working!</h1> {/* Add this */}
    <Navbar setSidebar={setSidebar} />
    <Routes>
      <Route path="/" element={<Home sidebar={sidebar} />} />
      <Route path="/video/:categoryId/:videoId" element={<Videos />} />
    </Routes>
  </div>
)

}

export default App
