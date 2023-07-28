import "../Tip/Tip.css";
const Tip = (props) => {
  return (
    <div className="tip">
      <ul className="navbar">
        <li className="navbar-link">
          <a className="a-navbar" href="#">
            projects
          </a>
        </li>
        <li className="navbar-link ">
          <a className="a-navbar" href="#">
            guides
          </a>
        </li>
        <li className="navbar-link">
          <a className="a-navbar" href="#">
            blog
          </a>
        </li>
        <li className="navbar-link">
          <a className="a-navbar" href="#">
            training & certification
          </a>
        </li>
        <li
          className="navbar-link search-navbar"
          onClick={props.showDropHeader}
        >
          <a className="a-navbar-magnifying_glass" href="#"></a>
        </li>
      </ul>
    </div>
  );
};

export default Tip;
