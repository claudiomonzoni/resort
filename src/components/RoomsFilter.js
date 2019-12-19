import React from "react";
//traemos Usecontex porque es un functional component
import { useContext } from "react";
//traemos roomcontext ya que roomconsumer es para los high order functions /anidar componente
import { RoomContext } from "../context";
import Title from "../components/Titles";

//funcion para obtener valores unicos que no se repitan en type y size
const getUnique = (items, value) => {
  //regresamos un array con Set que solo acepta valores no repetidos
  return [...new Set(items.map(item => item[value]))];
};

export default function RoomsFilter({ rooms }) {
  //recuperamos los datos de context y aprendo que es la manera mas facil de acceder a los datos "enseño de varias maneras"
  const context = useContext(RoomContext);
  //destruct
  const {
    handleChange,
    type,
    guest,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;
  //get Unique types
  let types = getUnique(rooms, "type");
  //agregamos all
  types = ["all", ...types];

  //Para guess
  let personas = getUnique(rooms, "capacity");
  personas = personas.map((persona, index) => {
    return (
      <option key={index} value={persona}>
        {persona}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="Busca cuartos"></Title>
      <form className="filter-form">
        {/* Selecciona tipo */}
        <div className="form-group">
          <label htmlFor="type">Room type</label>

          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {
              /* types a jsx */
              (types = types.map((tipo, index) => {
                return (
                  <option value={tipo} key={index}>
                    {tipo}
                  </option>
                );
              }))
            }
          </select>
        </div>
        {/* Fin de selecciona tipo */}

        {/* guess tipo */}
        <div className="form-group">
          <label htmlFor="capacity">capacity</label>

          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {/* valor personas viene de la linea 37 */}
            {personas}
          </select>
        </div>
        {/* guess tipo */}

        {/* rango precio */}
        <div className="form-group">
          <label htmlFor="price">Pricio cuartos ${price}</label>
          <input
            type="range"
            name="price"
            id="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChange}
            className="formControl"
          />
        </div>

        {/* fin rango precio */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* fin size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <label htmlFor="breakfast">Breakfast</label>
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
          </div>
          <div className="single-extra">
            <label htmlFor="pets">pets</label>
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* extras */}
      </form>
    </section>
  );
}
