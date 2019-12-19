import React from "react";
import defautlImage from "../images/room-12.jpeg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Room({ cuarto }) {
  const { name, slug, images, price } = cuarto;

  return (
    <article className="room">
      <div className="img-container">
        <img
          src={
            images[0] ||
            defautlImage /*usamos el operador || por si no carga la imagen[0] */
          }
          alt={name}
        />
        <div className="price-top">
          <h6>${price}</h6>
          <p>Por noche</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features{" "}
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}
// forma de checar las variables si son numeros, strings, boole...etc
Room.propTypes = {
  cuarto: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
