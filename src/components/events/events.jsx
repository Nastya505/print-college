import styles from "./events.module.css";
import Event from "../event/event";

function Events() {
    return (
      <>
        <div className="text-retular medium mb-6">Календарь событий</div>
        <div className={styles.events}>
            <Event actual day={"4-7"} mounth={"Октября"} dayofWeek={"ср"} title={"Окружной хакатон “Информационный прорыв”. Сезон: “ИИ”"}  >
              День абитуриента
            </Event>
            <Event actual day={"4-7"} mounth={"Октября"} dayofWeek={"ср"} title={"Окружной хакатон “Информационный прорыв”. Сезон: “ИИ”"}  />
            <Event day={"4-7"} mounth={"Октября"} dayofWeek={"ср"} title={"Окружной хакатон “Информационный прорыв”. Сезон: “ИИ”"}  />
            <Event day={"4-7"} mounth={"Октября"} dayofWeek={"ср"} title={"Окружной хакатон “Информационный прорыв”. Сезон: “ИИ”"}  />
            <Event  day={"4-7"} mounth={"Октября"} dayofWeek={"ср"} title={"Окружной хакатон “Информационный прорыв”. Сезон: “ИИ”"}  >
              День абитуриента
            </Event>
            <Event day={"4-7"} mounth={"Октября"} dayofWeek={"ср"} title={"Окружной хакатон “Информационный прорыв”. Сезон: “ИИ”"}  />
           
        </div>
      </>
    );
  }
  
  export default Events;
  