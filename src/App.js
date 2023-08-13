
import './App.css';
import {  Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Booking from "./components/Booking";
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element ={<Home/>}></Route>
      <Route path='/about' element ={<About/>}></Route>
      <Route path='/booking' element ={<Booking/>}></Route>
      <Route path='/confirm' element ={<ConfirmedBooking/>}></Route>
    </Routes>
    </>
  );
}

export default App;
