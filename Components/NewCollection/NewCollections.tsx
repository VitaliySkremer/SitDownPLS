import {Button} from "../UI/Button/Button";
import styles from './NewCollection.module.scss'
export const NewCollections = () => {
  return (
    <section style={{backgroundImage: 'url(img/Collection/Item1.jpg)'}} className={[styles.collection,'section'].join(' ')}>
      <div className={['container', styles.collections__main].join(' ')}>
        <h2 className={styles.title}>
          <span className={styles.mark}>
            Оксфорд 1950
          </span>
          <p className={styles.title_desc}>Новая коллекция изысканных кресел</p>
        </h2>
        <Button pSmall={true} fill={true}>
          Ознакомиться
        </Button>
      </div>
    </section>
  )
}