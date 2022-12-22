import {useAppSelector} from "../../../../Hooks/redux";
import {IProduct} from "../../../../Store/reducers/ProductsSlice";
import {CartProduct} from "./CartProduct/CartProduct";
import styles from './CartProductsList.module.scss'

export const CartProductsList = () => {

  const products = useAppSelector<IProduct[]>(state => state.productReducer.products)

  return (
    <ul className={styles.cart__list}>
      {products.map(item=>
        <li className={styles.cart__list_item} key={item.id}>
          <CartProduct product={item}/>
        </li>
      )}
    </ul>
  )
}