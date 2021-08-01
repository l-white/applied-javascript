import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
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
import NotFound from './components/NotFound';
import './App.css';

const App = (props) => {
  const [posts] = useState([
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
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Switch>
          <Route exact path="/blog"
          render={() => <Posts posts={posts} />}
          />
          <Route 
            path="/post/:postSlug"
            render={(props) => {
              const post = posts.find(
                (post) => post.slug === 
                props.match.params.postSlug
              );
              if (post) return <Post post={post} />;
              else return <NotFound />;
            }}
            />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;