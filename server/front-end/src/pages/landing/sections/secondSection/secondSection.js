import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

import webSiteImg from "../../../../img/web-site.svg";
import designGraficoImg from "../../../../img/SVG/ok2.svg";

export default class SecondSection extends Component {
  render() {
    return (
      <section id="second-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="title">A final... Quem somos?</h1>
              <p className="sub-title">
                Somos uma empresa junta duas áreas importantes para qualquer
                negócio, seja ele pessoal ou empresarial. Somos artistas.
                Desenvolvedores e Designers trabalhando para que seu projeto
                tenha mais desempenho e beleza.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="card-section col-md-6">
              <div class="card">
                <img src={webSiteImg} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title ">
                    Soluções em TI (Sites, API's e sistemas)
                  </h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="mx-auto col-12 text-center mr-5">
                    <Link
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Informações e Orçamentos"
                      className="btn button btn-primary "
                    >
                      Saiba mais <i class="fas fa-angle-double-right ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-section col-md-6">
              <div class="card">
                <img src={designGraficoImg} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Soluções em Design Gráfico</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Informações, Portfólio e Orçamentos"
                    className="mx-auto col-12 text-center mr-5"
                  >
                    <Link className="btn button btn-primary ">
                      Saiba mais <i class="fas fa-angle-double-right ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
