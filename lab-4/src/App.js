import React from 'react';
import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';
import CreateHeader from './components/CreateHeader';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Content />
      <Footer />
  </div>
  );
}

export default App;