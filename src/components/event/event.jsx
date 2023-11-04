import styles from "./event.module.css";


function Event({actual, day, mounth, dayofWeek, title, children}) {
    return (
      <>
        <div className={styles.event}>
            <div className={`${styles.date} mb-3`}>
                <div className={`text-big bold ${actual ? "cl-f" : ""}`}>{day}</div>
                <div  className={styles.mounth}>
                    <div className={`text-small medium ${actual ? "cl-f" : ""}`}>{mounth}</div>
                    <div className={`text-small ${actual ? "cl-f" : ""}`}>{dayofWeek}</div>
                </div>
            </div>
            <div className="text-small mb-3">{title}</div>
           
            
            {children
             ? 
             <div className={`${styles.line} text-small`}>
                {children}
             </div>    
            :
             ""
            }
        
        </div>
      </>
    );
  }
  export default Event;
  