import { useState } from "react";
import Jokes from "../components/Jokes.jsx";
import React from 'react';

const Index = () => {
    const [category, setCategory] = useState();
    
    return (
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
          <Jokes category={category} />
        </div>
    );
}

export default Index;
