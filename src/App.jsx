import { useState } from "react";
import Lista from "./Lista";
import Formulario from "./Formulario";

const App = () => {
  //hook -> use .....
  //state ->useState

  const [inputsState, setInputsState] = useState({
    title: "",
    date: "",
    note: "",
  });

  const [isSelected, setIsSelected] = useState({
    status: false,
    noteSelected: null,
  });

  let initialState = JSON.parse(localStorage.getItem("notas")) || [];
  const [notas, setNotas] = useState(initialState);

  const handleInputChange = (event) => {
    setInputsState({ ...inputsState, [event.target.name]: event.target.value });
  };

  const handleClickLimpiar = (event) => {
    setInputsState({ title: "", date: "", note: "" });
    setIsSelected({ status: false, noteSelected: null });
  };

  const handleClickGuardar = () => {
    setNotas([...notas, inputsState]);
    localStorage.setItem("notas", JSON.stringify([...notas, inputsState]));
    handleClickLimpiar();
    setIsSelected({ status: false, noteSelected: null });
  };

  const handleRemoveNote = (index) => {
    const nuevoArreglo = [];
    notas.forEach((nota, i) => {
      if (index !== i) {
        nuevoArreglo.push(nota);
      }
    });
    localStorage.setItem("notas", JSON.stringify(nuevoArreglo));
    setNotas(nuevoArreglo);
  };

  const handleClickLimpiarLista = () => {
    setNotas([]);
    localStorage.setItem("notas", JSON.stringify([]));
  };

  const handleClickNota = (index) => {
    setIsSelected({ status: true, noteSelected: index });
    setInputsState({
      title: notas[index].title,
      date: notas[index].date,
      note: notas[index].note,
    });
  };

  const handleClickActualizar = () => {
    let listaModificada = notas;
    listaModificada[isSelected.noteSelected] = inputsState;
    console.log(isSelected);
    setNotas(listaModificada);
    localStorage.setItem("notas", JSON.stringify(listaModificada));
    handleClickLimpiar();
    setIsSelected({ status: false, noteSelected: null });
  };

  return (
    <div className="App container">
      <div className="row">
        <div className="col">
          <Lista
            notas={notas}
            handleClickNota={handleClickNota}
            handleRemoveNote={handleRemoveNote}
            handleClickLimpiarLista={handleClickLimpiarLista}
          />
        </div>
        <div className="col">
          <Formulario
            handleInputChange={handleInputChange}
            inputsState={inputsState}
          />
          <div className="row">
            <span className="col">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClickLimpiar}
                style={{ width: "100%" }}
                disabled={
                  inputsState.title === "" &&
                  inputsState.date === "" &&
                  inputsState.note === ""
                }
              >
                Limpiar
              </button>
            </span>
            {isSelected.status && (
              <span className="col">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleClickActualizar}
                  style={{ width: "100%" }}
                  disabled={
                    inputsState.title === "" ||
                    inputsState.date === "" ||
                    inputsState.note === ""
                  }
                >
                  Actualizar
                </button>
              </span>
            )}

            <span className="col">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClickGuardar}
                style={{ width: "100%" }}
                disabled={
                  inputsState.title === "" ||
                  inputsState.date === "" ||
                  inputsState.note === ""
                }
              >
                Guardar
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
