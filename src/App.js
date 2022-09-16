import "./App.css";
import { useState } from "react";
import Jokes from "./components/Jokes.jsx";

function App() {
  const [category, setCategory] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Text" id="Header-text">
          Wanna read a joke?
        </h1>
      </header>
      <main>
        <div className="Text" id="display-box">
          <label id="lable">Choose a Category</label>
          <select
            className="Select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="hide">-- Category --</option>
            <option value={"any"}>Any</option>
            <option value={"programming"}>Programming</option>
            <option value={"misc"}>Misc</option>
            <option value={"pun"}>Pun</option>
            <option value={"spooky"}>Spooky</option>
          </select>
        </div>
        <div className="Text" id="display-box">
          <Jokes category={category} />
        </div>
      </main>
      <footer>&copy; React_Project - Anna Z, Simon & Marielle</footer>
    </div>
  );
}

export default App;
