import { Container, Content } from "./styles";

const ProjectCard = ({ title, children, source, alt, path }) => {
  return (
    <Container path={path}>
      <figure>
        <img src={source} alt={alt} />
      </figure>
      <Content>
        <a target="blank" href={path}>
          <h2 className="text-linear-gradient">{title}</h2>
          <p>{children}</p>
        </a>
      </Content>
    </Container>
  );
};
export default ProjectCard;
