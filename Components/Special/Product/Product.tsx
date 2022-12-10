import {ISpecial} from "../Special";
import styles from './Product.module.scss'
import {Button} from "../../UI/Button/Button";
interface IProduct {
  product: ISpecial;
  sale?: boolean
}

export const Product = ({product, sale = false}:IProduct) => {
  return (
    <div className={styles.product}>
      <img className={styles.img} src={product.images[0]} alt={product.title}/>
      <p className={styles.title}>{product.title}</p>
      <div className={styles.price__wrapper}>
        <span className={styles.price}>{(product.price).toFixed(2)}$</span>
        <span className={styles.price_old}>{Math.round(product.price * 1.1).toFixed(2)}$</span>
      </div>
      <div>
        <Button pSmall={true}>Купить</Button>
      </div>
      {sale && (
        <div className={styles.sale}>-10%</div>
      )}
    </div>
  )
}