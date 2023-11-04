import NewsCard from "./newsCard";

import styles from "./news.module.css"

import photo1 from "../../images/news/new-photo.png"
import photo2 from "../../images/news/news1.png"
import photo3 from "../../images/news/news2.png"
import arrow from "../../images/news/arrow.svg"

function News() {
    return (
        <div className={styles.wrapper}>
        <div className="text-regular medium mt-10 mb-6">Новости</div>
        <div className={styles.news}>
            <NewsCard
                photo={photo1}
                day={"24"}
                mounth={"октября"}
                title={"Столетний юбилей у нашего колледжа"}
            />
            <NewsCard
                photo={photo2}
                day={"15"}
                mounth={"октября"}
                title={"Победа наших студентов в цифровом прорыве, сезон: ИИ"}
            />
            <NewsCard
                photo={photo3}
                day={"16"}
                mounth={"октября"}
                title={"Конкурс от молодежного парламента новосибирской области"}
            />
            <NewsCard
                photo={photo1}
                day={"2"}
                mounth={"декабря"}
                title={"Столетний юбилей у нашего колледжа"}
            />
            <NewsCard
                photo={photo2}
                day={"24"}
                mounth={"декабря"}
                title={"Конкурс от молодежного парламента новосибирской области"}
            />
            <NewsCard
                photo={photo3}
                day={"4"}
                mounth={"ноября"}
                title={"Победа наших студентов в цифровом прорыве, сезон: ИИ"}
            />
        </div>
        <a className={`${styles.link} text-small medium mt-8 cl-b`} href="#">Все новости <img src={arrow} alt="all news" /></a>
        </div>
    
    );
  }
  
  export default News;
  