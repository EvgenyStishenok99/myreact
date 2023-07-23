import ContainerMiddle from "../ContainerMiddle/ContainerMiddle";
import ObjectFromAbove from "../ObjectFromAbove/ObjectFromAbove";
import "../Full/Full.css"
const Full = () => {
    return (
      <div className="full">
        <ObjectFromAbove />
        <ContainerMiddle />
      </div>
    );
  }

  export default Full;