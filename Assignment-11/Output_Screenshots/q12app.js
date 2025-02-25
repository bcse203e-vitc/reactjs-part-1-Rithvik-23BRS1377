import React from 'react';

function Greeting(props){
  return (<h1>Welcome {props.name}</h1>)
}

function App() {
  return(
    <Greeting name="Rithvik" />
  )
  
}

export default App;
