import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../context";
import Loading from "../components/Loading";

function RoomContainer({ context }) {
  const { sortedRooms, loading, rooms } = context;

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);

//SOLO FUNCIONA EL METODO DE HIGH ORDER FUNCTIONS CON COMPONENTES DE FUNCIONES DE DE CLASES
// otra manera de hacerlo sin el high order component donde desde context ya hacer el wrapper para pasar los props sin tener que esta hacianedo lo de abajo en cada componente
// import React from "react";
// import RoomsFilter from "./RoomsFilter";
// import RoomList from "./RoomList";
// import { RoomConsumer } from "../context";
// import Loading from "../components/Loading";

// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//         const { sortedRooms, loading, rooms } = value;

//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             Desde el contenedor de cuatos
//             <RoomsFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
