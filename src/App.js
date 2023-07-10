import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className='body' >
      <Full />
    </div>
  );
}

const Full = () => {
  return (
    <div className="full">
      <Pos />
      <ContainerMiddle />
    </div>
  );
}
const Pos = () => {
  return (
    <div className = "pos" >
      <DesktopHeader />
      <SearchDropHeaderNothidden />
    </div>
  );
}
const DesktopHeader = () => {
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
        

        <Tip />
      </div>
      <MobileHeader />


    </div>
  );
}
const Tip = () => {
  return (
    <div className = "tip" >
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
        <li className="navbar-link search-navbar" >
          <a className="a-navbar-magnifying_glass" href="#">

          </a>
        </li>
      </ul>
    </div >
  );
  
}
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

const SearchDropHeaderNothidden = () => {
  return (
    <div className = "search-drop-header-nothidden">
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
const ContainerMiddle = () => {
  return (
    <div className = "container-middle">
      <div className="middle">
        <h1>
          Основные проекты
        </h1>
        <p>От конфигурации до безопасности, от веб-приложений до больших данных - какими бы ни были потребности
          вашего приложения в
          инфраструктуре, есть <strong>Spring Project</strong>, который поможет вам создать его. Начните с малого
          и используйте то,
          что вам нужно - <strong>Spring имеет модульную конструкцию</strong>
        </p>
        <div className="section-content">
          <div className="container-section">
            <div className="container-logo">
              <div id="icon-logo-1"></div>
            </div>
            <div className="project-title">SPRING BOOT</div>
            <p className="project-description">
              Takes an opinionated view of building Spring applications and gets you up and running as quickly
              as possible.
            </p>
          </div>
          <div className="container-section">
            <div className="container-logo">
              <div id="icon-logo-2"></div>
            </div>
            <div className="project-title">SPRING FRAMEWORK</div>
            <p className="project-description">
              Provides core support for dependency injection, transaction management, web apps, data access,
              messaging and more.
            </p>
          </div>
          <div className="container-section">
            <div className="container-logo">
              <div id="icon-logo-3"></div>
            </div>
            <div className="project-title">SPRING CLOUD DATA FLOW</div>
            <p className="project-description">
              An orchestration service for composable data microservice applications on modern runtimes.
            </p>
          </div>
          <div className="container-section">
            <div className="container-logo">
              <div id="icon-logo-4"></div>
            </div>
            <div className="project-title">SPRING CLOUD</div>
            <p className="project-description">
              Provides a set of tools for common patterns in distributed systems. Useful for building and
              deploying microservices.
            </p>
          </div>
          <div className="container-section">
            <div className="container-logo">
              <div id="icon-logo-5"></div>
            </div>
            <div className="project-title">SPRING DATA</div>
            <p class="project-description">
              Provides a set of tools for common patterns in distributed systems. Useful for building and
              deploying microservices.
            </p>
          </div>
          <div className="container-section">
            <div className="container-logo">
              <div id="icon-logo-6"></div>
            </div>
            <div className="project-title">SPRING INTEGRATION</div>
            <p className="project-description">
              Supports the well-known <em>Enterprise Integration Patterns</em> via lightweight messaging and
              declarative adapters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
