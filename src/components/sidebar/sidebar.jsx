import styles from "./sidebar.module.css";
import Search from "../search/search";
import Navigation from "../navigation/navigation";
import Events from "../events/events";


function SideBar() {
    return (
      <div className={styles.sidebar}>
          <Search />
          <Navigation />
          <Events />
      </div>
    );
  }
  
  export default SideBar;
  