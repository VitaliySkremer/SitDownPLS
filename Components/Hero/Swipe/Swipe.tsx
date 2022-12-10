import {ISwipes} from "../Hero";
import styles from './Swipe.module.scss'
import Link from "next/link";
import {Button} from "../../UI/Button/Button";
export const Swipe = ({bg, title, link, textColor}:ISwipes) => {
  return (
    <div style={{backgroundImage: `url(${bg})`}} className={styles.swipe__wrapper}>
      <div className={['container', styles.swipe].join(' ')}>
        <span className={styles.title} style={textColor? {color:textColor}: {}}>{title}</span>
        <div>
          <Button fill={true}>
            <Link className={styles.link} href={link}>Подробнее</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}