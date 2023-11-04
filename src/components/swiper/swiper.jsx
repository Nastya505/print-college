import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import styles from "./swiper.module.css"

import photo1 from "../../images/swiper/swiper-photo1.png"
import photo2 from "../../images/swiper/swiper-2.jpg"
import photo3 from "../../images/swiper/swiper-3.jpg"


function SwiperModel() {
  return (
   
    <Swiper
        pagination={{
            dynamicBullets: true,
        }}
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        className={`mySwiper ${styles.swiper}`}
    >
        <SwiperSlide className={styles.swiperSlide}><img src={photo1} /></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><img src={photo2} /></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><img src={photo3} /></SwiperSlide>
    
      </Swiper>

  );
}

export default SwiperModel;