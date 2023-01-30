import {useGetProducts} from "../../Hooks/useGetProducts";
import { Loader } from "../UI/Loader/Loader";
import {Product} from "../Product/Product";
import styles from './BestRating.module.scss'
import {Button} from "../UI/Button/Button";
import {useState} from "react";

export const BestRating = () => {
  const [offset, setOffset] = useState(0);
  const {products, isLoading} = useGetProducts(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=8`)

  return (
    <section className={['container','section',styles.best__wrapper].join(' ')}>
      <h3 className='title'>
        Высокий рейтинг
      </h3>
      {products.length &&(
        <ul className={styles.list}>
          {products.map(item=>
            <li key={item.id + Math.random().toString(7)}>
              <Product product={item}/>
            </li>
          )}
        </ul>
      )}
      {isLoading
        ?<Loader/>
        :<Button onClick={()=>setOffset(prevState => prevState + 1)} pSmall={true} fill={true}>Смотреть больше товаров</Button>
      }
    </section>
  )
}