import { useState } from "react";


const App =() => {
  //hool -> use .....
  //stage ->useState

  const [state, setState]= useState("");


const handleInputChange =(event) => { 
setState(event.target.value);
console.log(state)

 };

  return (
    <div className="App">
      <h1>proyecto "notas"</h1>
      <label>
        input de prueba
      <input id="PruebaID" name="prueba" type="text" onChange={handleInputChange} value={state} /> 
      </label>

    </div>
  );
}

export default App;
