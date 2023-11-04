import styles from "./header.module.css";
import icon_logo from "../../images/header/logo.svg";
import icon_vk from "../../images/header/vk.svg";
import icon_ok from "../../images/header/ok.svg";
import icon_email from "../../images/header/email.svg";
import burger from "../../images/header/burger.svg"

function Header() {
    return (
      <div className={`${styles.header} mb-10`}>
            <img className={styles.logo} src={icon_logo} alt="logo" />
            <div className={styles.contacts}>
                <a href="#">+7 (906) 942 24 42</a>
                <div className={styles.social}>
                    <a href="#"><img src={icon_vk} alt="vk" /></a>
                    <a href="#"><img src={icon_ok} alt="ok" /></a>
                    <a href="#"><img src={icon_email} alt="email" /></a>
                </div>
            </div>
            <img src={burger} className={styles.burgerMenu} />
      </div>
    );
  }
  
  export default Header;
  