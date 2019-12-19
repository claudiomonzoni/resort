import React from "react";
//rfc react funcional component te crea como funcion
// export default function Rooms() {
//     return <div>Desde todos los cuartos</div>;
// }
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import RoomContainer from "../components/RoomsContainer";
import { motion } from "framer-motion";

//rafc lo crea mas moderno
const Rooms = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Hero heroclass="roomsHero">
        <Banner title="Nuestras habitaciones">
          <Link to="/" className="btn-primary">
            Regresar a inicio
          </Link>
        </Banner>
      </Hero>

      <RoomContainer />
    </motion.div>
  );
};

export default Rooms;
