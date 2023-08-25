import { Edit } from "@mui/icons-material";
import "../containerSection/containerSection.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const ContainerSection = ({ callBack, id, icon, title, description }) => {
  const removeItem = (id) => {
    callBack(id);
  };
  return (
    <div className="container-section">
      <Edit className="edit">
        <EditIcon></EditIcon>
      </Edit>
      <div className="delete" onClick={removeItem(id)}>
        <DeleteOutlineIcon></DeleteOutlineIcon>
      </div>

      <div className="container-logo">
        <div id={icon}></div>
      </div>
      <div className="project-title">{title}</div>
      <p className="project-description">{description}</p>
    </div>
  );
};

export default ContainerSection;
