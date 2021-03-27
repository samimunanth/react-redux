import logo from './logo.svg';
import './App.css';
import MainHeader from './Admin/Navbar/MainHeader'
import Sidebar from './Admin/Navbar/Sidebar'
import Content from './Admin/Navbar/Content'
import Footer from './Admin/Navbar/Footer';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'  


function App() {
  return (
    <>
  
      
      <MainHeader/>
      <Sidebar/>
      <Content/>
      <Footer/>
      
    </>
  );
}

export default App;
