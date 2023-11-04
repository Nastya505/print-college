import styles from "./App.module.css"
import Header from "../header/header";
import StateInfo from "../stateInfo/stateInfo";
import Main from "../main/main";
import SideBar from "../sidebar/sidebar";


function App() {
  return (
    <div className={`${styles.app} mt-5`}>
        <Header />
        <div className={styles.container}>
            <SideBar />
            <Main />
        </div>
        <StateInfo />
    </div>

  );
}

export default App;
