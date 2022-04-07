import { useState } from "react";


const App =() => {
  //hool -> use .....
  //stage ->useState

  const [inputsState, setInputsState]= useState({
    title:"",
    date:"",
    note:"",
  });


const handleInputChange =(event) => { 
 setInputsState({ ...inputsState, [event.target.name]: event.target.value});
}


const handleClickLimpiar = (event) => {
  setInputsState({title:"", date:"", note:"" });
};

  return (
    <div className="App container">
      <div className = "row" > 
        <div className = "col" >
          <h3>Lista</h3>
        </div>

        <div className="col">
        <h3>Notas</h3>
        <label className="mb-2">
          Titulo
          <input id="title" name="title" type="text" onChange={handleInputChange} value={inputsState.title} /> 
          </label>
         <br /> 
         <label className="mb-2">
        Fecha
      <input id="date" name="date" type="text" onChange={handleInputChange} value={inputsState.date} /> 
      </label>
      <br/>
      <label>
        Nota
      <input id="note" name="note" type="text" onChange={handleInputChange} value={inputsState.note} /> 
      </label>
      </div>
    </div>
    <hr />

    <div className = "row" > 
        <button className="btn btn-primary me-2" onClick={handleClickLimpiar}>Limpiar</button>
        </div>
        </div>

     

  );
}

export default App;