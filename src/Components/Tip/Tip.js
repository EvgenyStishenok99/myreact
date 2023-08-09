import "../Tip/Tip.css";
import Navbar from "../Navbar/navbar";
const panel = [
  { id: 1, navbar: "projects" },
  { id: 2, navbar: "guides" },
  { id: 3, navbar: "blog" },
  { id: 4, navbar: "training & certifications" },
];
const Tip = (props) => {
  return (
    <div className="tip">
      <ul className="navbar">
        {panel.map((item) => {
          return <Navbar key={item.id} navbar={item.navbar} />;
        })}
        <li
          className="navbar-link search-navbar"
          onClick={props.showDropHeader}
        >
          <a className="navbar-magnifying_glass" href="#"></a>
        </li>
      </ul>
    </div>
  );
};

export default Tip;
