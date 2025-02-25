import React from 'react';
import { useState } from "react";


function App() {
  const [age, setAge] = useState("");
  return (
  <div>
  <input type="number" onChange={(e) =>
 setAge(e.target.value)} />
  <p>{age >= 18 ? "You are an adult" : "You are a minor"}</p>
  </div>
  );
  
}

export default App;