const ProjectCard = ({ children, source, alt, path }) => {
  return (
    <div>
      <a target="blank" href={path}>
        <figure>
          <img src={source} alt={alt} />
        </figure>

        <p>{children}</p>
      </a>
    </div>
  );
};
export default ProjectCard;
