import { Container } from "./styles";

const ProjectCard = ({ title, children, source, alt, path }) => {
  return (
    <Container>
      <a target="blank" href={path}>
        <figure>
          <img src={source} alt={alt} />
        </figure>
        <h2>{title}</h2>
        <span>{children}</span>
      </a>
    </Container>
  );
};
export default ProjectCard;
