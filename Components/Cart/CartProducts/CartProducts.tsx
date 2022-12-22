import styles from './CartProducts.module.scss'
import {CartProductsList} from "./CartProductsList/CartProductsList";
export const CartProducts = () => {
  return (
    <section className='section'>
      <h3 className='title'>Корзина</h3>
      <div className={styles.cart__wrapper}>
        <div className={styles.cart__products_block}>
          <CartProductsList/>
        </div>
        <div className={styles.cart__price_block}>
          Блок цен
        </div>
      </div>
    </section>
  )
}