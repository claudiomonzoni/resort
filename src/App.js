import React from "react";
import { AnimatePresence } from "framer-motion";

import "./App.css";
//paginas
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRooms from "./pages/SingleRoom";
import Error from "./pages/Error";
//componenetes
import Navbar from "./components/Navbar";

//Rutas
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <AnimatePresence>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route exact path="/rooms/" component={Rooms}></Route>
          <Route exact path="/rooms/:slug" component={SingleRooms}></Route>
          <Route component={Error}></Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
