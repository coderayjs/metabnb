import   React  from   'react'
import './App.css'
import { ReactDOM } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import "./App.css";
import Metabnbsection from './components/Metabnbsection'
import Footer from './components/Footer/Footer'
import Inspiration from './components/Inspiration'


const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Metabnbsection/>
      <Inspiration/>
      <Footer/>
    </div>
  );
}



export default App