import React from 'react';
import {Routes,Route} from 'react-router-dom';
import SignUp from './components/login/signup/login/signup/SignUp';
import LogIn from './components/login/signup/login/signup/LogIn';
import LandingPage from './components/LandingPage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/login' element={<LogIn/>}/>
    </Routes>
  );
}

export default App;
