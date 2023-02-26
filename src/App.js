import './App.css';
import BtnHolder from './komponente/BtnHolder';
import Sto from "./komponente/Sto";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BtnHolder />} />
        <Route path="/sto" element={<Sto />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;


// import React from 'react';

// function Sto() {
//     return (
//         <div >

//         </div>
//     );
// }

// export default Sto;