
import React from 'react';



function App() {
  const style={color:'green',fontSize:'20px'};
  function clicker(){
    alert("Button Clicked!");
  }
  return(
    <button onClick={clicker} style={style}>Click Me!</button>
  )

}

export default App;
