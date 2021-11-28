import { Link } from "react-scroll";
import styles from "./Nav.module.scss";

const Nav = ({ toggle }) => {
  return (
    <nav className={styles.menu}>
      <ul>
        <li onClick={toggle}>
          <Link to="about_umbrella" spy={true} smooth={true} duration={800}>
            Prévia Umbrella
          </Link>
        </li>
        <li_2 onClick={toggle}>
          <Link to="leon" spy={true} smooth={true} duration={800}>
            Leon
          </Link>
        </li_2>
        <li_3 onClick={toggle}>
          <Link to="claire" spy={true} smooth={true} duration={800}>
            Claire
          </Link>
        </li_3>
        <li_4 onClick={toggle}>
          <Link to="sherry" spy={true} smooth={true} duration={800}>
            Sherry
          </Link>
        </li_4>
        <li onClick={toggle}>
          <Link to="gallery" spy={true} smooth={true} duration={800}>
            Galeria
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="about" spy={true} smooth={true} duration={800}>
            Sobre a Capcom
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
