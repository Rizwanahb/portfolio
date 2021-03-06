//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Particles from "react-particles-js";
import About from "./components/about";



function App() {
  return (
    <>
    <Particles
      className="particles-canvas"
      params={{
        particles:{
          number:{
            value:30,
            density:{
              enable:true,
              value_area:900
            }
          },
          shape:{
            type:"circle",
            stroke:{
              width:6,
              color:"#f9ab00"
            }
          }
        }
      } }
    />
    <Navbar/>
    <Header/>
    <About/>
    </>

  );
}

export default App;
