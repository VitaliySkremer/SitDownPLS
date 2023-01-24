import styles from './CartPrice.module.scss'
import {Button} from "../../UI/Button/Button";
import {useAppSelector} from "../../../Hooks/redux";
import {Devider} from "../../UI/Devider/Devider";
export const CartPrice = () => {
	const price = useAppSelector<number>(state => state.productReducer.products.reduce((acc, item)=> acc+=item.price,0))
	const totalCount = useAppSelector<number>(state => state.productReducer.products.length)

	return (
		<div className={styles.block__price}>
			<Button fill={true} style={{width:'100%'}}>
				Перейти к оформлению
			</Button>
			<span className={styles.text__buy}>
				Доступные способы и время доставки можно выбрать при оформлении заказа
			</span>
			<Devider/>
			<div className={styles.block__total_count}>
				<span className={styles.total__text}>
					Ваша корзина
				</span>
				<span className={styles.block__total_count_text}>
					{totalCount} товара
				</span>
			</div>
			<Devider/>
			<div className={styles.block__price_text}>
				<span className={styles.total__text}>
					Общая стоимость
				</span>
				<span className={styles.price__text}>
					{price} $
				</span>
			</div>
		</div>
	)
}