import React, { useState } from "react";

export default function App() {
  const [numero, setNumero] = useState(0);

  const add = () => {
    if (numero < 10) {
      setNumero(numero + 1);
    }
  };
  const dim = () => {
    if (numero > 0) {
      setNumero(numero - 1);
    }
  };

  const clear = () => setNumero(0);

  return (
    <div>
      <h1>{numero}</h1>
      <button
        onClick={() => {
          add();
        }}
      >
        +{" "}
      </button>
      <button
        onClick={() => {
          dim();
        }}
      >
        -
      </button>
      <button onClick={() => clear()}> Limpar </button>
    </div>
  );
}
