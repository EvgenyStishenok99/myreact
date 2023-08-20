import { Edit } from "@mui/icons-material";
import "../containerSection/containerSection.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const ContainerSection = ({ icon, title, description }) => {
  return (
    <div className="container-section">
      <Edit className="edit">
        <EditIcon></EditIcon>
      </Edit>
      <DeleteOutlineIcon className="delete"></DeleteOutlineIcon>
      <div className="container-logo">
        <div id={icon}></div>
      </div>
      <div className="project-title">{title}</div>
      <p className="project-description">{description}</p>
    </div>
  );
};

export default ContainerSection;
