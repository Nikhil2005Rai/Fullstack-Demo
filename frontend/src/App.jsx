import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  
  

  return (
    <>
      <h1>Fullstack Demo</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <h3>{joke.content}</h3>
          </div>
        ))
      }
    </>
  );
}

export default App;
