import React, { useState, useEffect } from "react";
import "./Jokes.css"

const Jokes = ({ category }) => {
  const url = `https://v2.jokeapi.dev/joke/${category}`;

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((apiData) => {
        setData(apiData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }, [url]);
  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : error ? (
        <div>There was an error</div>
      ) : data.type === "single" ? (
        <div>{data.joke}</div>
      ) : (
        <div>
          <div className="setup">{data.setup}</div>
          <div className="delivery">{data.delivery}</div>
        </div>
      )}
    </div>
  );
};
export default Jokes;
