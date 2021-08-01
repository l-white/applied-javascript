import React, {useState} from 'react';
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
import Post from './components/Post';
import Posts from './components/Posts';
import './App.css';

const App = (props) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      slug: "hello-react",
      title: "Hello React",
      content: "Lorem.",
    },
    {
      id: 2,
      slug: "hello-project",
      title: "Hello Project",
      content: "Tothe.",
    },
    {
      id: 3,
      slug: "hello-blog",
      title: "Hello Blog",
      content: "Ipsum.",
    },
  ]);
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      
      <Route path="/contact" component={Contact} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;

/*
      <Route path="/blog" component={Blog} />
      */