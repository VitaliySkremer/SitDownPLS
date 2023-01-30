import styles from './CharacteristicProduct.module.scss'
import {Rating} from "./rating/Rating";
import {Button} from "../../UI/Button/Button";
import {CharacteristicTable} from "./CharacteristicTable/CharacteristicTable";

interface ICharacteristicProduct {
  title?: string;
  description?: string;
  price?:number;
  rating?: number;
}

export const CharacteristicProduct = ({title,description,price, rating}:ICharacteristicProduct) => {
  return (
    <div className={styles.container}>
      <Rating rating={3}/>
      <h3 className={styles.title}>
        {title}
      </h3>
      <p className={styles.description}>
        {description}
      </p>
      <p className={styles.price}>
        {price?.toLocaleString('en-US',{
          style: 'currency',
          currency: 'USD'
        })}
      </p>
      <Button
        pSmall={true}
        fill={true}
        className={styles.btn}
      >Купить в один клик</Button>
      <CharacteristicTable/>
    </div>
  )
}