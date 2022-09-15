import "./App.css";
import { useState } from "react";
import Jokes from "./components/Jokes.jsx";

function App() {
  const [category, setCategory] = useState();

  return (
    <div className="App">
      <header className="App-header">Wanna hear a joke?</header>
      <label>Choose Category</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="hide">-- Category --</option>
        <option value={"any"}>Any</option>
        <option value={"programming"}>Programming</option>
        <option value={"misc"}>Misc</option>
        <option value={"pun"}>Pun</option>
        <option value={"spooky"}>Spooky</option>
      </select>
      <div className="Textarea">
        <Jokes category={category} />
      </div>
      <footer>This is the footer</footer>
    </div>
  );
}

export default App;
