import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/#">WebSiteName</a>
            </div>
        <ul className="nav navbar-nav">
          <li className="active"><a href="/#">Home</a></li>
          <li><a href="/#">Page 1</a></li>
          <li><a href="/#">Page 2</a></li>
          <li><a href="/#">Page 3</a></li>
        </ul>
      </div>
    </nav>
  </div>
  );
}

export default App;
/*
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>
*/