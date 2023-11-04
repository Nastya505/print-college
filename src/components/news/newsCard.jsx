import styles from "./newsCard.module.css"

function NewsCard({photo, day, mounth, title}) {
    return (
      <>
       <div className={`${styles.card} p-4`} style={{backgroundImage: `url(${photo})`}}>
        <div className={`${styles.date} cl-w`}>
          <span className="text-big ">{day}</span>
          <span className="text-small">{mounth}</span>
        </div>
        <div className={`${styles.title} cl-w text-regular medium`}>{title}</div>
       </div>
      </>
    );
  }
  
  export default NewsCard;
  