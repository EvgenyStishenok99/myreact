import "../Tip/Tip.css";
import Navbar from "../Navbar/navbar";
const Tip = (props) => {
  const arrayForAbove = [
    { id: 1, anavbar: "projects" },
    { id: 2, anavbar: "guides" },
    { id: 3, anavbar: "blog" },
    { id: 4, anavbar: "training & certifications" },
  ];

  return (
    <div className="tip">
      <ul className="navbar">
        {arrayForAbove.map((item) => {
          return <Navbar key={item.id} anavbar={item.anavbar} />;
        })}
        <li
          className="navbar-link search-navbar"
          onClick={props.showDropHeader}
        >
          <a className="anavbar-magnifying_glass" href="#"></a>
        </li>
      </ul>
    </div>
  );
};

export default Tip;
