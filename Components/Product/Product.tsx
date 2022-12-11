
import styles from './Product.module.scss'
import {Button} from "../UI/Button/Button";
import { IProductFetch } from '../../Hooks/useGetProducts';
interface IProduct {
  product: IProductFetch;
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
      {sale
        ? <div className={styles.sale}>-10%</div>
        : <div className={styles.rating}>
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.2764 5.28193L10.5439 4.59758L8.42832 0.330127C8.37054 0.213287 8.27548 0.118702 8.15805 0.0612089C7.86355 -0.0834504 7.50567 0.037099 7.35842 0.330127L5.24285 4.59758L0.510317 5.28193C0.379841 5.30047 0.260549 5.36167 0.169216 5.45441C0.0587999 5.56733 -0.00204457 5.71924 5.24622e-05 5.87678C0.00214949 6.03431 0.0670165 6.18457 0.1804 6.29454L3.60445 9.61614L2.7955 14.3064C2.77653 14.4156 2.78867 14.5278 2.83053 14.6304C2.87239 14.733 2.94231 14.8218 3.03235 14.8869C3.12239 14.952 3.22896 14.9906 3.33996 14.9985C3.45096 15.0064 3.56196 14.9831 3.66037 14.9314L7.89337 12.717L12.1264 14.9314C12.2419 14.9926 12.3761 15.013 12.5048 14.9908C12.8291 14.9352 13.0472 14.6291 12.9912 14.3064L12.1823 9.61614L15.6063 6.29454C15.6995 6.20367 15.7611 6.08497 15.7797 5.95515C15.83 5.63059 15.6026 5.33015 15.2764 5.28193Z" fill="#FF862F"/>
          </svg>
          {((Math.random() * 2) + 4).toFixed(1)}
        </div>
      }
    </div>
  )
}