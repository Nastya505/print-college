import SwiperModel from "../swiper/swiper";
import News from "../news/news";
import style from "./main.module.css"

function Main() {
    return (
      <div className={style.main}>
          <SwiperModel />
          <News />  
      </div>
    );
  }
  
  export default Main;
  