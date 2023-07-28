import "../container-section/container-section.css";
const ContainerSection = (props) => {
  return (
    <div className="container-section">
      <div className="container-logo">
        <div id={props.icon}></div>
      </div>
      <div className="project-title">{props.title}</div>
      <p className="project-description">{props.description}</p>
    </div>
  );
};

export default ContainerSection;
