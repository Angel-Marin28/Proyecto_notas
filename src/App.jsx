import { useState } from "react";

const App = () => {
  //hool -> use .....
  //stage ->useState

  const [inputsState, setInputsState] = useState({
    title: "",
    date: "",
    note: "",
  });

  const handleInputChange = (event) => {
    setInputsState({ ...inputsState, [event.target.name]: event.target.value });
  };

  const handleClickLimpiar = (event) => {
    setInputsState({ title: "", date: "", note: "" });
  };

  const handleClickGuardar = () => {
    localStorage.setItem("notas", JSON.stringify(inputsState));
  };

  return (
    <div className="App container">
      <div className="row">
        <div className="col">
          <h3>Lista</h3>
        </div>
        <div className="col">
          <h3>Notas</h3>
          <label className="mb-2" style={{ width: "100%" }}>
            Titulo
            <input
              id="title"
              name="title"
              type="text"
              onChange={handleInputChange}
              value={inputsState.title}
              style={{ width: "100%" }}
            />
          </label>
          <br />
          <label className="mb-2" style={{ width: "100%" }}>
            Fecha
            <input
              id="date"
              name="date"
              type="text"
              onChange={handleInputChange}
              value={inputsState.date}
              style={{ width: "100%" }}
            />
          </label>
          <br />
          <label style={{ width: "100%" }}>
            Nota
            <input
              id="note"
              name="note"
              type="text"
              onChange={handleInputChange}
              value={inputsState.note}
              style={{ width: "100%" }}
            />
          </label>
          <hr />
          <div className="row">
            <span className="col">
              <button
                type="button"
                className="btn btn-primary me-2"
                onClick={handleClickLimpiar}
                style={{ width: "100%" }}
              >
                Limpiar
              </button>
            </span>
            <span className="col">
              <button
                type="button"
                className="btn btn-primary me-2"
                onClick={handleClickGuardar}
                style={{ width: "100%" }}
              >
                Guardar
              </button> {" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
