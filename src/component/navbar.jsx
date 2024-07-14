import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav>
      <h2 className="logo">
        <Link className="logo-link" to="/">
          {props.title}
        </Link>{" "}
      </h2>
      <ul class="nav-menu">
        <li>
          <Link className="nav-menu_link" to="/">
            Home
          </Link>   </li>  <li>
          <Link className="nav-menu_link " to="/actors">
            Best Actors
          </Link>
        </li>
        <li>
          <Link className="nav-menu_link " to="/films">
            Best Films
          </Link>
        </li> </ul>  </nav>   ); }
