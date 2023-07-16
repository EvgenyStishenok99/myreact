import DesktopHeader from "./DesktopHeader";
import React, {useState} from 'react';
import SearchDropHeaderNothidden from "./SearchDropHeaderNothidden";

//Что такое pos, что это значит я как друогой разработчик не понимаю
//неотфарматирован файл, некрасиво
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
