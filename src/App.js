import React, { Component } from 'react'
import { BrowserRouter} from "react-router-dom";

import Routes from './Routes';

import Header from'./components/Header';
import Footer from './components/Footer'
export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
            <Header />
            <Routes />
            <Footer />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
