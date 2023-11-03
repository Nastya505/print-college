import image1 from "../../images/stateInfo/1.svg";
import image2 from "../../images/stateInfo/2.svg";
import img1 from "../../images/stateInfo/img1.svg";
import img2 from "../../images/stateInfo/img2.svg";
import img3 from "../../images/stateInfo/img3.svg";
import img4 from "../../images/stateInfo/img4.svg";
import img5 from "../../images/stateInfo/img5.svg";

import styles from "./stateInfo.module.css"

function StateInfo() {
    return (
      <div>
        <div className={`${styles.block} mb-10`}>
            <a href="#"><img src={image2} alt="" />Министрерство просвещения Российской Федерации</a>
            <a href="#"><img src={image2} alt="" />Министрерство просвещения Российской Федерации</a>
            <a href="#"><img src={image1} alt="" />Министрерство просвещения Российской Федерации</a>
        </div>

        <div className={styles.stateInfoLink}>
            <a href="#"><img src={img1} alt="" /></a>
            <a href="#"><img src={img2} alt="" /></a>
            <a href="#"><img src={img3} alt="" /></a>
            <a href="#"><img src={img4} alt="" /></a>
            <a href="#"><img src={img5} alt="" /></a>
        </div>
      </div>
    );
  }
  
  export default StateInfo;
  