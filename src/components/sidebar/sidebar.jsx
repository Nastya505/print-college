import styles from "./sidebar.module.css";
import Search from "../search/search";
import Navigation from "../navigation/navigation";
import Calendar from "../events/events";


function SideBar() {
    return (
      <div className={styles.sidebar}>
          <Search />
          <Navigation />
          <Calendar />
      </div>
    );
  }
  
  export default SideBar;
  