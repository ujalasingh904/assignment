import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LiveNow from './components/LiveNow';
import { Navigate, Route, Routes } from 'react-router-dom';
import BlackPage from './components/BlackPage';
import { useNavigate } from 'react-router-dom';


const App = () => {
  const [live, setLive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (live) {
      const timer = setTimeout(() => {
        navigate('/home-page');
        setLive(!live);
      }, 3000);  
 
      return () => clearTimeout(timer);
    }
  }, [live, navigate]);

  return (
    <div className="relative min-h-screen dark:bg-black dark:text-white overflow-hidden">
      <div className="absolute -top-14 sm:-top-12 left-0 sm:-left-20 w-[30vw] h-[40vh] dark:bg-pink-300 bg-pink-700 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 sm:-bottom-10 right-0 sm:-right-14 w-[30vw] h-[40vh] dark:bg-purple-300 bg-purple-700 rounded-full blur-3xl opacity-50 z-0 "></div>

      <Navbar />  
      <Routes>
        <Route exact path='/' element={!live ? <Home setLive={setLive} /> : <LiveNow />} />
        <Route exact path='/home-page' element={<BlackPage /> } />
      </Routes>
    </div>

  );
};

export default App;
