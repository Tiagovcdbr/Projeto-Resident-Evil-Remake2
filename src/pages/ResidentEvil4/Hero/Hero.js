/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import LogoIMG from "../../../images/ResidentEvil4/firstView-title-global.png";
import SwitchIMG from "../../../images/ResidentRemake/icons/switch-logo.png"
import styles from "./Hero.module.scss";

import GlobalPlataforms from "../../../images/ResidentRemake/icons/firstView-platforms-global.png";
import IMGRe4Bnr from '../../../images/ResidentEvil4/re4-bnr-re.jpg'

import Audio from '../../../audios/Resident Evil 4 Voice Title.m4a'
// import Chris from "./Chris/Chris";
// import { InfoChris } from "../../Home/DataGames/ResidentRemake/ChrisData";
// import Jill from "./Jill/Jill";
// import { InfoJill } from "../../Home/DataGames/ResidentRemake/JillData";

const Hero = () => {
  useEffect(() => {
    Aos.init({duration: 2500});
  }, []);  

  return (
    <div className={styles.main} id="home">
      <audio
        src={Audio}
        autoPlay={true}
      ></audio>
      <div data-aos="fade" className={styles.main_bg}>       
      </div>
        <div data-aos="fade" className={styles.main_content}>
          <img src={LogoIMG} 
            alt="Logo"
          /> 
          <h2 className={styles.firstView_title_text}>Resident Evil 4</h2>
          <div className={styles.firstView_switch}>
            <div className={styles.firstView_switch_logo}>
              <img src={SwitchIMG}
              alt="Nintendo Switch" />
            </div>
            <div className={styles.firstView_switch_info}>
              <div className={styles.firstView_switch_text}>Nintendo Switch™ version</div>
              <div className={styles.firstView_switch_date}>Available Now</div>
            </div>
          </div>
          <div className={styles.firstView_otherPlats}>
            <img src={GlobalPlataforms} alt="PS4 PS3 XBOX ONE available now" />
          </div>
        </div>

        <div className={styles.firstView_bnr}>
          <p className={styles.firstView_bnr_item}>
            <a>
              <img src={IMGRe4Bnr} alt="" />
            </a>
          </p>
        </div>
        <div className={styles.firstView_scroll}>SCROLL</div>                    
    </div>
  );
};

export default Hero;
