import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from 'swiper/modules';


// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import styles from "./swiper.module.css"

import photo from "../../images/swiper/swiper-photo1.png"

function SwiperModel() {
  return (
    <>
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className={`mySwiper ${styles.swiper}`}
        >
            <SwiperSlide className={styles.swiperSlide}><img src={photo} /></SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}><img src={photo} /></SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}><img src={photo} /></SwiperSlide>
       
         </Swiper>
    </>
  );
}

export default SwiperModel;