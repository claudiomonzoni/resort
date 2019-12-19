//rcc crar class basado en componentes y no en funciones
import React, { Component } from "react";
//importo una imagen default
import defaultBg from "../images/room-1.jpeg";
//importo comp hero
//import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props.match.params.slug);
    this.state = {
      //obtenemos el parametro de slug desde los mismos props de react
      slug: this.props.match.params.slug,
      fondoDefault: defaultBg
    };
  }

  //accedemos al context
  static contextType = RoomContext;
  /* 
  //tambien sirve usando el ciclo de vida de los componentes
  componentDidMount() {
    console.log(this.props.match.params.slug);
  }
  */
  render() {
    //destructure el metodo getRoom
    const { getRoom } = this.context;
    //usamo el metodo y le mandamo en las propuedades el slug desde el state de este componente
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>Error, cuarto inexistente</h3>
          <Link to="/rooms" className="btn-primary">
            Regresar a rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    //destructuring el array de imagenes para separar la imagen principa [0] del resto con el operador ...
    const [featuredImg, ...defaultImg] = images;

    return (
      <>
        {/* <StyledHero img={images[0] || this.state.fondoDefault}> */}
        <StyledHero img={featuredImg || this.state.fondoDefault}>
          <Banner title={name} subtitle="Aqui el subtitulo">
            <Link to="/rooms" className="btn-primary">
              Back to cuartos
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <a href="#">
            <div className="single-room-images">
              {defaultImg.map((item, index) => {
                return <img key={index} src={item} alt={name} />;
              })}
            </div>
          </a>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size:{size} sqft</h6>
              <h6>
                Max capacity:{" "}
                {capacity > 1 ? `${capacity} personas` : `${capacity} persona`}
              </h6>
              <h6>
                pets:{" "}
                {pets
                  ? `Mascotas permitidas`
                  : `Mascotas no permitidas` /* no es necesario usar template literals si no uso {js}*/}
              </h6>
              <h6>{breakfast && "Desayuno incluido"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>{item} </li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
