import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import heroesImg from "../assets/heroes.png";
import logoImg from "../assets/logo.svg";

export default function Logon() {
  return (
    <div className="container logon">
      <section className="form">
        <img src={logoImg} alt="Be the Hero!" />
        <form action="">
          <h1 className="form-title">Faça seu logon</h1>
          <input placeholder="Seu ID" />
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
