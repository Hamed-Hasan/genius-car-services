import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import RequierAuth from './Pages/RequirAuth/RequierAuth';
import ServiceDetail from './Pages/About/ServiceDetail/ServiceDetail';
import NotFound from './Pages/NotFound/NotFound';
import Reg61 from './Pages/Reg61/Reg61';
import Log61 from './Pages/Log61/Log61';
import RequireAuth from './Pages/Log61/RequireAuth';
import Shop from './Pages/Home/Shop/Shop';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/home" element={<Home/>}/>
       <Route path='/serviceDetail/:serviceId' element={<ServiceDetail/>}/>
       <Route path="/About" element={
         <RequierAuth>
           <About/>
         </RequierAuth>
       }/>
       <Route path="/shop" element={
         <RequireAuth>
           <Shop/>
         </RequireAuth>
       }/>
       
      
       <Route path="/login" element={<Login/>}/>
       <Route path="/signup" element={<SignUp/>}/>
       <Route path="/reg61" element={<Reg61/>}/>
       <Route path="/log61" element={<Log61/>}/>
       <Route path='*' element={<NotFound/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
