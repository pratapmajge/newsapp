import './App.css';
import React, { Component } from 'react';
import NavBar from './component/NavBar';
import News from './component/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  pageSize = 50;
  apiKey = "c5268d7236714c36ae2af1c8f232f569";  // ⬅️ Replace with your actual API key

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={this.pageSize} country="us" category="general" apikey={this.apiKey} />} />
            <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country="us" category="business" apikey={this.apiKey} />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" apikey={this.apiKey} />} />
            <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} country="us" category="general" apikey={this.apiKey} />} />
            <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country="us" category="health" apikey={this.apiKey} />} />
            <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} country="us" category="science" apikey={this.apiKey} />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} country="us" category="sports" apikey={this.apiKey} />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country="us" category="technology" apikey={this.apiKey} />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
