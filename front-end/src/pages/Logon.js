import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../services/api";
import { FiLogIn } from "react-icons/fi";

import heroesImg from "../assets/heroes.png";
import logoImg from "../assets/logo.svg";

export default function Logon() {
  const [ID, setID] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const res = await api.post("/sessions", { id: ID });
      localStorage.setItem("ongID", ID);
      localStorage.setItem("ongName", res.data.name);
      history.push("/profile");
    } catch (err) {
      alert("Falha no login, tente novamente.");
    }
  }

  return (
    <div className="container logon">
      <section className="form">
        <img src={logoImg} alt="Be the Hero!" />
        <form onSubmit={handleLogin}>
          <h1 className="form-title">Faça seu logon</h1>
          <input
            required
            placeholder="Seu ID"
            value={ID}
            onChange={e => setID(e.target.value)}
          />
          <button className="button">Entrar</button>
        </form>
        <Link to="/register" className="link">
          <FiLogIn className="icon" /> Não tenho cadastro
        </Link>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
