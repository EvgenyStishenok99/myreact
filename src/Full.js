import ContainerMiddle from "./ContainerMiddle";
import ObjectFromAbove from "./ObjectFromAbove";
const Full = () => {
    return (
      <div className="full">
        <ObjectFromAbove />
        <ContainerMiddle />
      </div>
    );
  }

  export default Full;