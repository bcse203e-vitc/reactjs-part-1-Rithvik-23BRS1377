
import React from 'react';



function App() {
  const users = ["Alice", "Bob", "Charlie"];
  
   return (
   <ul>
   {users.map((user, index) => (
   <li key={index}>{user}</li>
   ))}
   </ul>
   );
  
}

export default App;
