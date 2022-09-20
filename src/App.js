import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Text" id="Header-text" href="/">
          <Link to="/" className="App-link">
            WANNA READ A JOKE?
          </Link>
        </h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div>
          <Link to="About" className="App-link">
            &copy; React_Project - Anna Z, Simon & Marielle
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default App;
