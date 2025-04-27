import styles from "./OtherPageReference.module.css";
import arrow from "../../assets/images/arrow.svg";

export default function OtherPageReference({ img, title,}) {
  
  return (
<section className="container">
      <div className={styles.card}>
     
        <div>
          <div>
            <img src={img} alt="img"  width={122} height={150}/>
          </div>

          <h4>{title}</h4>

          <a href="#">
            Shop <img src={arrow} alt="" />
          </a>
        </div>
      </div>
    </section>
    
  );
}
