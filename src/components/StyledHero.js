import styled from "styled-components";
import fondoDefault from "../images/room-3.jpeg";

const StyledHero = styled.header`
  min-height: 60vh;
  background: url("${props =>
    props.img ? props.img : fondoDefault}") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default StyledHero;
