// Netlify에 Deploy 시킴

import React from 'react';
import './app.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Event from './components/event/Event';
import Quote from './components/quote/Quote';
import Home from './components/home/Home';
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/register" element={ <Register /> } />
          <Route exact path="/login" element={ <Login /> } />
          <Route exact path="/event" element={ <Event /> } />
          <Route exact path="/quote" element={ <Quote /> } />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer />
      </Router>
      
      <div id="to-top">
        <ArrowUpwardIcon />
      </div>

    </>
  );
}

export default App;
