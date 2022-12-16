import {IBLog} from "../UsefulProducts/UsefulProducts";
import styles from './BlogCart.module.scss'
import {Button} from "../UI/Button/Button";
import Link from "next/link";

export const BlogCart = ({img,body,link}:IBLog) => {
  return (
    <div className={styles.card}>
      <img src={img} alt="Блог" className={styles.img}/>
      <div className={styles.card__body}>
        <p className={styles.card__body_text}>{body}</p>
        <div>
          <Link className={styles.link} href={link}>Читать</Link>
        </div>
      </div>
    </div>
  )
}