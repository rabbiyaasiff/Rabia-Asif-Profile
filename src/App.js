import { Routes,Route } from 'react-router-dom';
import React from 'react'
import './App.css';
import About from './components/About';
import Education from './components/Education'
import Experience from './components/Experience';
import Skills from './components/Skills';
import Interest from './components/Interest';


function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        
       <Routes><Route path='/' element={<About/>}/>
       <Route path='/education' element={<Education/>}/>
       <Route path='/experience' element={<Experience/>}/>
       <Route path='/skills' element={<Skills/>}/>
       <Route path='/interests' element={<Interest/>}/>

       </Routes>
      </header>
    </div>
  );
}

export default App;
