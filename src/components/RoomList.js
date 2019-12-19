import React from "react";
import Room from "./Room";
//el parametro de rooms debe ser el mismo que se declara en el componenere roomsContainer
export default function RoomList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3> Ninguna busqueda coincide</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(item => {
          return <Room key={item.id} cuarto={item} />;
        })}
      </div>
    </section>
  );
}
