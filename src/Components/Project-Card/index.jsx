import { Container, Content } from "./styles";

import { BsArrowRightShort } from "react-icons/bs";

const ProjectCard = ({ title, children, source, alt, path }) => {
  return (
    <Container path={path}>
      <figure>
        <img src={source} alt={alt} />
      </figure>

      <Content>
        <h2>{title}</h2>
        <span>{children}</span>
        <a target="blank" href={path}>
          SEE MORE <BsArrowRightShort className="react-icons" />
        </a>
      </Content>
    </Container>
  );
};
export default ProjectCard;
