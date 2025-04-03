import { Container, Content } from "./styles";

const ProjectCard = ({ title, children, source, alt, path }) => {
  return (
    <Container path={path}>
      <a target="blank" href={path}>
        <figure>
          <img src={source} alt={alt} />
        </figure>
        <Content>
          <h2 className="text-linear-gradient">{title}</h2>
          <p>{children}</p>
        </Content>
      </a>
    </Container>
  );
};
export default ProjectCard;
