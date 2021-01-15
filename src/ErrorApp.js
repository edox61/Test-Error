import React, { useState } from "react";

function ErrorApp() {
  const [Error, setError] = useState("");

  return (
    <div>
      <button onClick={() => setError("Error al traer desde API")}>
        Error
      </button>
      <button onClick={() => setError("Credenciales Incorrectas")}>
        Otro Error
      </button>
      <button onClick={() => setError("")}>Proceso Exitoso</button>
      {Error && <h1>{Error}</h1>}
    </div>
  );
}
export default ErrorApp;
