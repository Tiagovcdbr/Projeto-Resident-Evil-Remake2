/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from '../GlobalNav/GlobalNav.module.scss'
import ResistenceIMG from '../../../images/Resident3Remake/resistance_bnr.jpg'
import { Link } from 'react-scroll'

const GlobalNav = () => {  

  return (
    <div className={styles.global_nav}>
      <div className={styles.global_nav_box}>
        <ul className={styles.global_nav_list}>
          <li className={styles.nav_firstview}>
            <Link to="top" spy={true} smooth={true} duration={1200}>TOP</Link>
          </li>
          <li className={styles.nav_topics}>
            <Link to="news" spy={true} smooth={true} duration={1200}>NEWS</Link>
          </li>
          <li className={styles.nav_trailer}>
            <Link to="trailer" spy={true} smooth={true} duration={1200}>TRAILER</Link>
          </li>
          <li className={styles.nav_about}>
            <Link to="about" spy={true} smooth={true} duration={1200}>ABOUT</Link>
          </li>
          <li className={styles.nav_character}>
            <Link to="character" spy={true} smooth={true} duration={1200}>CHARACTER</Link>
          </li>
          <li className={styles.nav_art}>
            <Link to="art" spy={true} smooth={true} duration={1200}>IMAGES</Link>
          </li>
          <li className={styles.nav_product}>
            <Link to="information" spy={true} smooth={true} duration={1200}>PRODUCT INFORMATION</Link>
          </li>
          <li className={styles.nav_mutual_link}>
            <img src={ResistenceIMG} alt='resistence' />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default GlobalNav