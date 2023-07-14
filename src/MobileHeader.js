const MobileHeader = () => {
    return (
      <div className = "mobile-header" >
        <div className="left_column">
          <div className="mobile-search">
            <input type="text" oninput="search_left_column()" className="input-search_left_column"
              placeholder="Search for..." />
          </div>
          <ul className="navbar">
            <li className="navbar-link">
              <a className="a-navbar" href="#">home</a>
            </li>
            <li className="navbar-link">
              <a className="a-navbar" href="#">projects</a>
            </li>
            <li className="navbar-link">
              <a className="a-navbar" href="#">guides</a>
            </li>
            <li className="navbar-link">
              <a className="a-navbar" href="#">blog</a>
            </li>
            <li className="navbar-link">
              <a className="a-navbar" href="#">training & certification</a>
            </li>
          </ul>
        </div>
        <div className="div_mob-container-header">
          <ul className="burger-head">
            <li className="navbar-link-b" onclick="menu()">
              <a className="burger" href="#"></a>
            </li>
          </ul>
  
          <ul className="mob-spring-logo-div2">
            <span id="mob-spring-logo-span"></span>
          </ul>
        </div>
      </div>
    );
  }

  export default MobileHeader;