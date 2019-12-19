import React, { Component } from "react";
import Titles from "./Titles";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail></FaCocktail>,
        titulo: "Bebidas gratis",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, est."
      },
      {
        icon: <FaHiking></FaHiking>,
        titulo: "Excursiones al parque",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, est, consectetur adipisicing elit. Vitae, est"
      },
      {
        icon: <FaBeer></FaBeer>,
        titulo: "Chelas gratis",
        info: "Lorem ipsum dolor, sit amet consectetur "
      },
      {
        icon: <FaShuttleVan></FaShuttleVan>,
        titulo: "Transporte",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, est."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Titles title="Services"></Titles>
        <div className="services-center">
          {this.state.services.map((items, index) => {
            return (
              <article key={index} className="service">
                <span>{items.icon}</span>
                <h6>{items.titulo}</h6>
                <p>{items.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
