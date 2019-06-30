import React, { Component } from 'react';

import Header from './components/header';
import Home from './pages/home';
import Footer from './components/footer';

class App extends Component {
  render() {
    return(
      <div className = "app" >
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
