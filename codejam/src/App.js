import logo from './logo.svg';
import './App.css';
import SignUp from './components/login/signup/login/signup/SignUp';
import {Routes,Route} from 'react-router-dom'
import { Link } from 'react-router-dom';
import LogIn from './components/login/signup/login/signup/LogIn';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />     
        <Link
          className="App-link"
          to="/signup"
          rel="noopener noreferrer"
        >
          Let's start jamming 🎶
        </Link>
      </header>}/>
      
      <Route path="/signup" element={<SignUp/>}/>
      <Route path='/login' element={<LogIn/>}/>
      
      </Routes>

    </div>
  );
}

export default App;
