import {IProduct} from "../../../../../Store/reducers/ProductsSlice";
import {CheckBox} from "../../../../UI/CheckBox/CheckBox";
import styles from './CartProduct.module.scss'
interface ICartProductProps {
  product:IProduct;
}

export const CartProduct = ({product}:ICartProductProps) => {
  return (
    <div className={styles.cart}>
      <CheckBox style={{marginRight:'15px'}}/>
      <img className={styles.img} src={product.images[0]}/>
      <span className={styles.title}>{product.title}</span>
      <span className={styles.price}>{product.price} $</span>
    </div>
  )
}