import SwiperModel from "../swiper/swiper";
import News from "../news/news";
import styles from "./main.module.css"

function Main() {
    return (
      <div className={styles.main}>
          <SwiperModel />
          <News />  
      </div>
    );
  }
  
  export default Main;
  