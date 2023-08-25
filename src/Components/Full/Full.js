import ContainerMiddle from "../ContainerMiddle/ContainerMiddle";
import ObjectFromAbove from "../ObjectFromAbove/ObjectFromAbove";
import "../Full/Full.css";

const Full = (props) => {
  return (
    <div className="full">
      <ObjectFromAbove
        inputValue={props.inputValue}
        onChangeHandler={props.onChangeHandler}
      />
      <ContainerMiddle
        searchData={props.searchData}
        callBack={props.removeItem}
      />
    </div>
  );
};

export default Full;
