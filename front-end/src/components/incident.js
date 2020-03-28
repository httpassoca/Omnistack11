import React from "react";
import { FiTrash2 } from "react-icons/fi";

export default function Incident(props) {
  const { value, description, id, title } = props.incident;

  
  return (
    <li className="incident">
      <div className="incident-title">CASO</div>
      <p>{title}</p>
      <div className="incident-title">DESCRIÇÃO:</div>
      <p>{description}</p>
      <div className="incident-title">VALOR:</div>
      <p>
        {Intl.NumberFormat("pt-br", {
          style: "currency",
          currency: "BRL"
        }).format(value)}
      </p>
      <button
        type="button"
        onClick={() => {
          props.deleteFunction(id);
        }}
      >
        <FiTrash2 />
      </button>
    </li>
  );
}
