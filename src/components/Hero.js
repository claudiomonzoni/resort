import React from "react";

export default function Hero({ children, heroclass }) {
  return <header className={heroclass}>{children}</header>;
}

Hero.defaultProps = {
  heroclass: "defaultHero"
};
