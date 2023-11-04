import styles from"./footer.module.css";

function Footer() {
    return (
      <div className={`${styles.footer} mt-20 pb-10 pt-5`}>
        <div className={styles.column}>
            <div className="medium text-regular cl-w mb-5">Контакты:</div>
            <div className={`${styles.info} text-regular cl-w`}>
                <span>(383) 314-54-06</span>
                <span>nkpit@edu54.ru</span>
                <span>630048, г.Новосибирск,ул. Немировича-Данченко 102/1</span>
            </div>
        </div>

        <div className={styles.column}>
            <div className="medium text-regular cl-w mb-5">Расписание:</div>
            <div className={`${styles.info} text-regular cl-w`}>
                <span>ПН-ПТ 08:00–16:30</span>
                <span>CБ 8:00–13:00</span>
                <span>ВС Выходной</span>
            </div>
        </div>

      </div>
    );
  }
  
  export default Footer;
  