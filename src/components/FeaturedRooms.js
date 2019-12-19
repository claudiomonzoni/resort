import React, { Component } from "react";
import Title from "./Titles";
import { RoomContext, RoomConsumer } from "../context";
import LoadingGif from "./Loading";
import Room from "./Room";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: cuartos } = this.context;

    cuartos = cuartos.map(cuarto => {
      return <Room key={cuarto.id} cuarto={cuarto} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms"></Title>
        <div className="featured-rooms-center">
          {loading ? <LoadingGif /> : cuartos}
        </div>
      </section>
    );
  }
}
