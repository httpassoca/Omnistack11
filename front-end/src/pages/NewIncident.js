import React, { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import logoImg from "../assets/logo.svg";
import api from "../services/api";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const ongID = localStorage.getItem("ongID");
  const history = useHistory();

  async function handleAddIncident(e) {
    e.preventDefault();
    const data = { title, description, value };
    try {
      await api.post("/incidents", data, {
        headers: {
          Authorization: ongID
        }
      });
      history.push('/profile');
    } catch (error) {
      alert("Erro em adicionar caso, por favor tente novamente");
    }
  }
  return (
    <div className="container register">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero!" />
          <h1 className="form-title">Novo caso</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link to="/profile" className="link">
            <FiArrowLeft className="icon" /> Voltar para Home{" "}
          </Link>
        </section>
        <form action="">
          <input
            placeholder="Título do caso"
            value={title}
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => {
              setDescription(e.target.value);
            }}
          />
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={e => {
              setValue(e.target.value);
            }}
          />

          <button className="button" onClick={handleAddIncident}>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
