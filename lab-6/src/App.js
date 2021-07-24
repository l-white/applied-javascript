import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;