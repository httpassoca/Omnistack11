import React from "react";
import logoImg from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
export default function Register() {
  return (
    <div className="container register">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero!" />
          <h1 className="form-title">Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link to="/" className="link">
            <FiArrowLeft className="icon" />
            Tenho cadastro
          </Link>
        </section>
        <form action="">
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="Whats App" />
          <div className="input-group">
            <input placeholder="Cidade" />
            <input placeholder="UF"/>
          </div>
          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
