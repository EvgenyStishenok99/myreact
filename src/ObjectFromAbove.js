import DesktopHeader from "./DesktopHeader";
import React, {useState} from 'react';
import SearchDropHeaderNothidden from "./SearchDropHeaderNothidden";
const ObjectFromAbove = () => {
    const [isShowDropHeader, setIsShowDropHeader] = useState(false);
    const sayHi = () =>{
     setIsShowDropHeader (!isShowDropHeader)
      
  }
    return (
      <div className = "objectFromAbove" >
        <DesktopHeader showDropHeader={sayHi} />
        <SearchDropHeaderNothidden isShowDropHeader={isShowDropHeader} />
      </div>
    );
  }

  export default ObjectFromAbove;