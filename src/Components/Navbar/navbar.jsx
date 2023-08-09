const Navbar = (props) => {
  return (
    <li className="navbar-link">
      <a className="navbar" href="#">
        {props.navbar}
      </a>
    </li>
  );
};
export default Navbar;
