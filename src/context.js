import React, { Component } from "react";
//importamos los datos
//import items from "./data";
//como este es export default lo puedo nombrar como quiera
import cliente from "./Contenful";

//import RoomsContainer from "./components/RoomsContainer";
//context
const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    //arrays con los datos
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    //valores default para el filtro rooms comp
    type: "all",
    guest: 1,
    capacity: 1,
    price: 0,
    minPrice: 10,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  //getData desde contenful

  getData = async () => {
    try {
      let respuesta = await cliente.getEntries({
        //content model
        content_type: "resortRooms",
        //order: "sys.createdAt"
        // order: "fields.price"
        //precio en reversa
        order: "-fields.price"
      });

      let rooms = this.formatData(respuesta.items);
      //intera entre los objetos, busca featured y si es true lo agrega al array
      let featuredRooms = rooms.filter(room => room.featured === true);
      //recuperamos el valor maximo de precios en todos los cuartos
      let maxPrice = Math.max(...rooms.map(item => item.price));
      // console.log(maxPrice); regresa 600 que es el precio mas caro
      let maxSize = Math.max(...rooms.map(item => item.size));
      // console.log(maxPrice); regresa 1000 que es el tamaño mas grande
      //cambiamos los valores con setState

      this.setState({
        rooms,
        sortedRooms: rooms,
        featuredRooms,
        loading: false,
        //agregamos los maximos para el filtro
        price: maxPrice,
        maxPrice,
        maxSize
      });
    } catch (error) {
      console.log(error);
    }
  };
  //iniciamos con el ciclo de vida

  componentDidMount() {
    this.getData();
  }

  formatData(items) {
    //iteramos los datos importados
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, images, id }; // despues de la coma indica que eso lo salte al iterar
      return room;
    });
    return tempItems;
  }
  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    //diferencia entre find y filter, find resgresa el primer resultado encontrado y regresa un obj mientras que filter regresa un array, este caso "room"
    return room;
  };
  //funcion para el componente Rooms filter
  handleChange = e => {
    const target = e.target;
    //comprobamos si en un check box para hacer un if es checkbox regresa checado, si no regresa el valor de los demas campos
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = e.target.name;

    this.setState(
      {
        // ponemos el valor de los seleccionado si no regresa a "all" que es lo que esta en el state por default
        //cambiamos el e.target.name en el dom
        // tambien puede ser simplemente type:value
        [name]: value
      }, //callback
      this.filterRooms
    );

    // console.log(
    //   `Esto es el target:${target}, nombre:${name}, y valor:${value}`
    // );
  };

  filterRooms = () => {
    //cambiado el state arriba, hacemos decons al state
    let {
      rooms,
      type,
      capacity,
      price,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;
    //todos los cuartos:
    let tempRooms = [...rooms]; //dentro de [ porque es un array]

    //tranformo capacity de string a numero entero
    capacity = parseInt(capacity);
    price = parseInt(price);

    //filtrar por tipo
    if (type !== "all") {
      //si no es "all" quiere decir que es hora de filtrar, type del state coincide con el type del data u objeto
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    //filtrar por capacidad
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity === capacity);
    }
    //filtramos por precio

    tempRooms = tempRooms.filter(precio => precio.price <= price);

    //filtramos por tamaño
    tempRooms = tempRooms.filter(
      cuarto => cuarto.size >= minSize && cuarto.size <= maxSize
    );

    //filtramos solo los que tienen desayunos
    if (breakfast) {
      tempRooms = tempRooms.filter(cuartos => cuartos.breakfast === true);
    }

    // los mismo con mascotas
    if (pets) {
      tempRooms = tempRooms.filter(mascotas => mascotas.pets === true);
    }

    //cambiamo es state
    this.setState({
      //cambiamos el state con los filtrado, recordar que antes sortedRoom:rooms
      sortedRooms: tempRooms
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          //hacemos disponibles los datos de el cuarto para SingleRoom con el metodo getRoom y lo asignamos al objeto value
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;

//high order function: retornan otras funciones en ves de anidarlas y pasamos los props desde aqui
export function withRoomConsumer(Component) {
  return function ConsumerBandeja(props) {
    return (
      <RoomConsumer>
        {/* consumimos el context asi: */}
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
export { RoomConsumer, RoomProvider, RoomContext };
