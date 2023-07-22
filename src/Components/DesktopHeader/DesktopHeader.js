import Tip from "../Tip/Tip";
import MobileHeader from "../MoobileHeader/MobileHeader";
const DesktopHeader = (props)  => {
  
    return (
      <div className="desktop-header">
        <div className="container-header" >
  
          <div className=".div_mob-container-header">
  
           </div>
          
            <span className="spring-logo-div">
              <a className="spring-logo" href="./my document.html">
                <span id="spring-logo-span">
  
                </span>
  
              </a>
  
  
            </span>
          
  
            <Tip showDropHeader={props.showDropHeader}></Tip>
        </div>
        <MobileHeader />
  
  
      </div>
    );
  }
  export default DesktopHeader;