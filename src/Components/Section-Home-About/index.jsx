import { Container } from "./styles";
import Henry from "../../Assets/Henry.svg";

const HomeAbout = () => {
  return (
    <Container id="About">
      <figure>
        <img src={Henry} alt="Eduardo Henrique" />
      </figure>

      <h3>About me</h3>
      <p>
        Junior Front-End Developer based in Recife/Brazil. I worked in the
        administration area for almost 2 years when I decided I.T Area is my
        passion. Now I looking for a new job to improve my knowledge{" "}
      </p>
    </Container>
  );
};
export default HomeAbout;
