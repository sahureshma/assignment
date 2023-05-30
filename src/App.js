import './App.css';
import SignIn from './component/SignIn/SignIn';
import Home from './component/Home';
import SignUp from './component/SignUp';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {

  return (
    
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/"  element={<SignIn/>}/>
        </Routes>
       
      
      </Router>
    
      // <SignIn/>
   
  );
}

export default App;