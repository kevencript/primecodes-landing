import React, { Component } from "react";
import "./style.css";

import astronauta from "../../../../img/astronauta.svg";

export default class ThirdSection extends Component {
  render() {
    return (
      <section id="third-sec">
        {/* Aqui está a divisória em formato de onda */}
        <section id="wave-div">
          <svg
            id="bottom-wave"
            data-name="Camada 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1366 160.49"
          >
            <path
              class="cls-1"
              d="M1234,54c-88.86-7.43-117.44,72.78-216,81-109.1,9.1-129.32-83.21-245-81-104.8,2-116.49,82.44-224,83-105.4.55-120.68-76.62-217-68-93.94,8.41-120.61,85.51-207,81C69.79,147.12,26.71,112.81,0,86V214H1366V131C1338.66,99.88,1293.58,59,1234,54Z"
              transform="translate(0 -53.51)"
            />
          </svg>
        </section>

        {/* Aqui ficara o conteúdo */}
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 text-center ">
              <h1 className="title">Entre em Contato</h1>

              <form>
                <div className="form-group">
                  <input type="name" placeholder="Digite o seu nome" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Qual seu e-mail?" />
                </div>
                <div className="form-group">
                  <input placeholder="Digite seu telefone com DDD" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Digite o que nos deseja enviar" />
                  <small id="emailHelp" class="form-text text-white">
                    Iremos responder o mais rápido possível!
                  </small>
                </div>
                <div className="form-group">
                  <button type="submit" class="btn btn-primary">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6 col-sm-12 text-center">
              <img alt="Astronauta PrimeCodes" src={astronauta} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
