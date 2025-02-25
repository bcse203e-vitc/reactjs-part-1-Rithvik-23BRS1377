import React from 'react';

function App() {
  const name = "Rithvik";

  
  const hours = new Date().getHours();
  let greeting = "";

  if (hours < 12) {
    greeting = "Good Morning";
  } else if (hours < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <div>
      <h1>{greeting}, {name}!</h1>
    </div>
  );
}

export default App;
