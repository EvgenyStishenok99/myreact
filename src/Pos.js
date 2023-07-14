import DesktopHeader from "./DesktopHeader";
import React, {useState} from 'react';
import SearchDropHeaderNothidden from "./SearchDropHeaderNothidden";
const Pos = () => {
    const [isShowDropHeader, setIsShowDropHeader] = useState(false);
    const sayHi = () =>{
     setIsShowDropHeader (!isShowDropHeader)
      
  }
    return (
      <div className = "pos" >
        <DesktopHeader showDropHeader={sayHi} />
        <SearchDropHeaderNothidden isShowDropHeader={isShowDropHeader} />
      </div>
    );
  }

  export default Pos;