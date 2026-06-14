import { useState } from 'react'
import Login from './componets/Login.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './componets/Users.tsx';
import AddSim from './componets/AddSim.tsx';
function App() {


   return ( 
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
             <Route path="/users" element={<Users />} />
             <Route path="/addSim" element={<AddSim />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
