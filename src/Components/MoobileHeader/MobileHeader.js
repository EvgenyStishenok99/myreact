import Navbar from "../Navbar/navbar";
import "../MoobileHeader/MobileHeader.css";
const MobileHeader = () => {
  function menu() {
    if (document.querySelector(".left_column")) {
      let magic = document.querySelector(".left_column");
      let mag = document.querySelector(".div_mob-container-header");
      magic.classList.add("left_column_open");
      mag.classList.add("div_mob-container-header_open");
      magic.classList.remove("left_column");
      mag.classList.remove("div_mob-container-header");
    } else {
      let magic = document.querySelector(".left_column_open");
      let mag = document.querySelector(".div_mob-container-header_open");
      magic.classList.add("left_column");
      mag.classList.add("div_mob-container-header");
      magic.classList.remove("left_column_open");
      mag.classList.remove("div_mob-container-header_open");
    }
  }
  function search_left_column() {
    let input = document.querySelector(".input-search_left_column");
    let titles = document.querySelectorAll(".project-title");

    let stringToFind = input.value.toUpperCase();
    titles.forEach((item) => {
      let title = item.textContent;

      if (title.includes(stringToFind)) {
        item.closest(".container-section").style.display = "block";
      } else {
        item.closest(".container-section").style.display = "none";
      }
    });
  }
  const arrayForAbove = [
    { id: 1, anavbar: "home" },
    { id: 2, anavbar: "projects" },
    { id: 3, anavbar: "guides" },
    { id: 4, anavbar: "blog" },
    { id: 5, anavbar: "training & certifications" },
  ];
  return (
    <div className="mobile-header">
      <div className="left_column">
        <div className="mobile-search">
          <input
            type="text"
            onInput={search_left_column}
            className="input-search_left_column"
            placeholder="Search for..."
          />
        </div>
        <ul className="navbar">
          {arrayForAbove.map((item) => {
            return <Navbar key={item.id} anavbar={item.anavbar} />;
          })}
        </ul>
      </div>
      <div className="div_mob-container-header">
        <ul className="burger-head">
          <li className="navbar-link-b" onClick={menu}>
            <a className="burger" href="#"></a>
          </li>
        </ul>

        <ul className="mob-spring-logo-div2">
          <span id="mob-spring-logo-span"></span>
        </ul>
      </div>
    </div>
  );
};

export default MobileHeader;
