import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div >
      <Full />
    </div>
  );
}

const Full = () => {
  return (
    <div >
      <Pos />
    </div>
  );
}
const Pos = () => {
  return (
    <div >
      <Desktop_header />
      <Search_drop_header_nothidden />
    </div>
  );
}
const Desktop_header = () => {
  return (
    <div>
      <div className="container-header" >

        <div className=".div_mob-container-header">

        </div>
        <div>
          <span class="spring-logo-div">
            <a class="spring-logo" href="./my document.html">
              <span id="spring-logo-span">

              </span>

            </a>


          </span>
        </div>

        <Tip />
      </div>
      <Mobile_header />


    </div>
  );
}
const Tip = () => {
  return (
    <div >
      <ul className="navbar">
        <li className="navbar-link">
          <a className="a-navbar" href="#">projects</a>
        </li>
        <li className="navbar-link ">
          <a className="a-navbar" href="#">guides</a>
        </li>
        <li className="navbar-link">
          <a className="a-navbar" href="#">blog</a>
        </li>
        <li className="navbar-link">
          <a className="a-navbar" href="#">training & certification</a>
        </li>
        <li className="navbar-link search-navbar" onclick="sayHi()">
          <a className="a-navbar-magnifying_glass" href="#">

          </a>
        </li>
      </ul>
    </div >
  );
}
const Mobile_header = () => {
  return (
    <div >
      <div className="left_column">
        <div className="mobile-search">
          <input type="text" oninput="search_left_column()" class="input-search_left_column"
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
          <li classNmae="navbar-link">
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

const Search_drop_header_nothidden = () => {
  return (
    <div >
      <div className="container-header">
        <div className="search-form-container">
          <input type="text" oninput="search()" className="input-search" placeholder="Search for..." />
          <button className="search-button-input">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;