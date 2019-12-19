//rfc
import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Hero>
        <Banner title="Habitaciones de lujo" subtitle="Aqui el subtitulo">
          <Link to="/rooms" className="btn-primary">
            {" "}
            Rooms{" "}
          </Link>
        </Banner>
      </Hero>

      <Services></Services>

      <FeaturedRooms></FeaturedRooms>
    </motion.div>
  );
}
