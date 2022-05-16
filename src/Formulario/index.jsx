import React, { Fragment } from "react";

const Formulario = ({ handleInputChange, inputsState, title, date, note }) => {
  return (
    <>
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
          type="date"
          onChange={handleInputChange}
          value={inputsState.date}
          style={{ width: "100%" }}
        />
      </label>
      <br />
      <label style={{ width: "100%" }}>
        Nota
        <textarea
          id="note"
          name="note"
          onChange={handleInputChange}
          value={inputsState.note}
          style={{ width: "100%" }}
        />
      </label>
      <hr />
    </>
  );
};

export default Formulario;
