import styles from "./navigation.module.css";

import news from "../../images/navigation/news.svg";
import calendar from "../../images/navigation/calendar.svg";
import dpo from "../../images/navigation/dpo.svg";
import directions from "../../images/navigation/directions.svg";
import info from "../../images/navigation/info.svg";
import portfolio from "../../images/navigation/icon-portfolio.svg";
import agent from "../../images/navigation/agent.svg";

function Navigation() {
    return (
    <div className={`${styles.nav} mt-10 mb-10`}>
        <a className={styles.link} href="#">
            <img src={news} />
            <span className="text-small cl-b">Новости</span>
        </a>
        <a className={styles.link} href="#">
            <img src={calendar} />
            <span className="text-small cl-b">Расписание</span>
        </a>
        <a className={styles.link} href="#">
            <img src={dpo} />
            <span className="text-small cl-b">ДПО</span>
        </a>
        <a className={styles.link} href="#">
            <img src={directions} />
            <span className="text-small cl-b">Направления и проходные баллы</span>
        </a>
        <a className={styles.link} href="#">
            <img src={info} />
            <span className="text-small cl-b">О колледже</span>
        </a>
        <a className={styles.link} href="#">
            <img src={portfolio} />
            <span className="text-small cl-b">Портфолио студентов</span>
        </a>
        <a className={styles.link} href="#">
            <img src={agent} />
            <span className="text-small cl-b">О кадровом агентстве</span>
        </a>
        <a className={styles.link} href="#">
            <img src={news} />
            <span className="text-small cl-b">Новости</span>
        </a>
        <a className={styles.link} href="#">
            <img src={news} />
            <span className="text-small cl-b">Новости</span>
        </a>

      </div>
    );
  }
  
  export default Navigation;
  