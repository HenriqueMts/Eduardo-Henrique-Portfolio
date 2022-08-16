import { Container } from "./styles";
import Henry from "../../Assets/Henry.png";

const HomeAbout = () => {
  return (
    <Container id="About">
      <figure>
        <img src={Henry} alt="Eduardo Henrique" />
      </figure>
    </Container>
  );
};
export default HomeAbout;
