import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../services/api";
import { FiPower } from "react-icons/fi";

import logoImg from "../assets/logo.svg";
import Incident from "../components/incident";

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const ongName = localStorage.getItem("ongName");
  const ongID = localStorage.getItem("ongID");
  const history = useHistory();

  // Show Incidents in screen
  useEffect(() => {
    try {
      api
        .get("/profile", {
          headers: {
            Authorization: ongID
          }
        })
        .then(res => {
          setIncidents(res.data);
        });
    } catch (err) {
      alert("Erro no banco de dados");
    }
  }, [ongID]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongID
        }
      });
      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (error) {
      alert("Erro ao deletar caso, tente novamente.");
    }
  }

  async function handleLogout() {
    localStorage.clear();
    history.push('/')
  }

  return (
    <div className="container profile">
      <header>
        <img src={logoImg} alt="Be the Hero!" />
        <span> Bem vinda, {ongName}</span>
        <Link className="button" to="/new">
          Cadastrar novo caso
        </Link>
        <button type="button" className="button icon" onClick={handleLogout}>
          <FiPower />
        </button>
      </header>
      <h1 className="form-title">Casos cadastrados</h1>
      <ul>
        {incidents.map(incident => (
          //   React needs a key
          <Incident
            key={incident.id}
            incident={incident}
            deleteFunction={handleDeleteIncident}
          />
        ))}
      </ul>
    </div>
  );
}
