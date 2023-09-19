
import './App.css'
import Footer from './components/Home/Footer';
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </>
  )
}

export default App
