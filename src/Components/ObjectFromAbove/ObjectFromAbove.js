import DesktopHeader from "../DesktopHeader/DesktopHeader";
import React, { useState } from "react";
import SearchDropHeaderNothidden from "../SearhDropHeaderNohidden/SearchDropHeaderNothidden";

const ObjectFromAbove = (props) => {
  const [isShowDropHeader, setIsShowDropHeader] = useState(false);
  const sayHi = () => {
    setIsShowDropHeader(!isShowDropHeader);
  };
  return (
    <div className="objectFromAbove">
      <DesktopHeader showDropHeader={sayHi} />
      <SearchDropHeaderNothidden
        isShowDropHeader={isShowDropHeader}
        inputValue={props.inputValue}
        onChangeHandler={props.onChangeHandler}
      />
    </div>
  );
};
export default ObjectFromAbove;
