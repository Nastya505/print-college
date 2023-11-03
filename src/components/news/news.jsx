import NewsCard from "./newsCard";

import styles from "./news.module.css"

import photo from "../../images/news/new-photo.png"
import arrow from "../../images/news/arrow.svg"

function News() {
    return (
        <div className="mb-20">
        <div className="text-regular medium mt-10 mb-6">Новости</div>
        <div className={styles.news}>
            <NewsCard
                photo={photo}
                day={"24"}
                mounth={"октября"}
                title={"Столетний юбилей у нашего колледжа"}
            />
            <NewsCard
                photo={photo}
                day={"24"}
                mounth={"октября"}
                title={"Столетний юбилей у нашего колледжа"}
            />
            <NewsCard
                photo={photo}
                day={"24"}
                mounth={"октября"}
                title={"Столетний юбилей у нашего колледжа"}
            />
            <NewsCard
                photo={photo}
                day={"24"}
                mounth={"октября"}
                title={"Столетний юбилей у нашего колледжа"}
            />
            <NewsCard
                photo={photo}
                day={"24"}
                mounth={"октября"}
                title={"Столетний юбилей у нашего колледжа"}
            />
            <NewsCard
                photo={photo}
                day={"24"}
                mounth={"октября"}
                title={"Столетний юбилей у нашего колледжа"}
            />
        </div>
        <a className={`${styles.link} text-small medium mt-5 cl-b`} href="#">Все новости <img src={arrow} alt="all news" /></a>
        </div>
    
    );
  }
  
  export default News;
  