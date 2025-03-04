import './App.css';
import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';

export default class App extends Component {
  // a=' Pratap';
  render() {
    return (
      <div>
        {/* Hello this is class based rect{this.a} */}
        <NavBar />
        <News pageSize={6} country='us' category="health"/>
      </div>
    )
  }
}




