import React from "react";
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
