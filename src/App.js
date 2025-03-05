import './App.css';
import React, { Component } from 'react';
import NavBar from './component/NavBar';
import News from './component/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Routes>     
            <Route exact path="/" element={<News key="general" pageSize={6} country="us" category="general" />} />
            <Route exact path="/bussiness" element={<News key="bussiness" pageSize={6} country="us" category="bussiness" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={6} country="us" category="entertainment" />} />
            <Route exact path="/general" element={<News key="general" pageSize={6} country="us" category="general" />} />
            <Route exact path="/health" element={<News key="health" pageSize={6} country="us" category="health" />} />
            <Route exact path="/science" element={<News key="science" pageSize={6} country="us" category="science" />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={6} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={6} country="us" category="technology" />} />
          </Routes>
        </div>
      </Router>
    ); 
  }      
} 
