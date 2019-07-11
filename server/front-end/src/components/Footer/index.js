import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Footer extends Component {
  // JSX stuff
  render() {
    return (
      <section id="footer">
        <footer className="page-footer font-small blue pt-4">
          <div className="container">
            <div className="row">
              {/* Sessão das redes sociais */}
              <div class="col-xl-6 col-lg-4 col-md-2 col-sm-1 col-12 flex-center text-center icones-sociais">
                <a
                  className="li-ic"
                  href="https://api.whatsapp.com/send?1=pt_BR&phone=55061991169967&text=Ol%C3%A1!%20Acessei%20a%20PrimeCodes%20pelo%20site%20e%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Enviar mensagem no Whatsapp"
                    className="fab fa-whatsapp fa-lg white-text mr-md-5 mr-3 fa-2x hover-social"
                  >
                    {" "}
                  </i>
                </a>
                <a
                  className="li-ic"
                  href="https://www.linkedin.com/company/prime-codes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Linkedin"
                    className="fab  fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x hover-social"
                  >
                    {" "}
                  </i>
                </a>

                <a
                  className="ins-ic"
                  href="https://www.instagram.com/prime_codes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Instagram @prime_codes"
                    className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x hover-social"
                  >
                    {" "}
                  </i>
                </a>
              </div>
              {/* Seção de contatos */}
              <section className="fale-conosco col-xl-3 col-lg-4 col-md-5 col-sm-6 col-12">
                <h1 className="title">Fale conosco</h1>
                <ul className="list-unstyled">
                  <li>
                    <i className="fas icone-contato fa-envelope mr-2" />{" "}
                    primecodes.org@gmail.com
                  </li>
                  <li>
                    <i className="fas  icone-contato fa-phone mr-2" /> +55 061
                    99116-9967
                  </li>
                  <li>
                    <i className="fas icone-contato fa-phone mr-2" /> +55 000
                    99999-9999
                  </li>
                </ul>
              </section>

              {/* Seção de Links */}
              <section className="fale-conosco col-xl-3 col-lg-4 col-md-4 col-sm-5 col-12">
                <h1 className="title">Links rápidos</h1>
                <ul className="list-unstyled">
                  <li>
                    <i className="fas fa-link mr-1" />
                    <Link className="link">Orçamentos para Sites</Link>
                  </li>
                  <li>
                    <i className="fas fa-link mr-1" />
                    <Link className="link">Orçamentos para Design Gráfico</Link>
                  </li>
                  <li>
                    <i className="fas fa-link mr-1" />
                    <Link className="link">Realizar um orçamento</Link>
                  </li>
                </ul>
              </section>
            </div>
          </div>

          {/* Copyright */}
          <div class="footer-copyright text-center py-3">
            © 2019 Copyright - PrimeCodes
          </div>
          {/* Copyright */}
        </footer>
      </section>
    );
  }
}

export default Footer;
