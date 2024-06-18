import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import About from './Components/About';
import Services from './Components/Services';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Feedback from './Components/Feedback';
import Payment from './Components/Payment';
import Appointment from './Components/Appointment';
import Departments from './Components/Departments';
import Doctors from './Components/Doctors';
import Activities from './Components/Activities';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
    
      <Routes>
        <Route path="/Homepage" element={<Homepage/>} />
        <Route path="/About" element={<About/>} />
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Feedback' element={<Feedback/>}/>
        <Route path='/Payment' element={<Payment/>}/>
        <Route path='/Appointment' element={<Appointment/>}/>
        <Route path='/Departments' element={<Departments/>}/>
        <Route path='/Doctors' element={<Doctors/>}/>
        <Route path='/Activities' element={<Activities/>}/>

      </Routes>
      
      <Footer/>

      
     
    </div>
    </Router>
  );
}

export default App;
