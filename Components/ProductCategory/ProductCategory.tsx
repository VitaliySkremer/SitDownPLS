import {ITopCategory} from "../TopСategories/TopСategories";
import styles from './ProductCategory.module.scss'
import Link from "next/link";
interface IProductCategory {
  category:ITopCategory;
}

export const ProductCategory = ({category}:IProductCategory) => {
  return (
    <div className={styles.product__wrapper}>
      <div>
        {category.metaInfo.map(item=>
          <span className={styles.meta__info} key={item}>{item}</span>
        )}
      </div>
      <h5 className={styles.title}>{category.title}</h5>
      <img className={styles.img} src={category.img} alt={category.title}/>
      <Link className={styles.link} href='/404'>
        <span>В каталог</span>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M9.625 7.5625L13.0625 11L9.625 14.4375" stroke="#A65CF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="11" cy="11" r="10" stroke="#A65CF0" strokeWidth="2"/>
          </g>
        </svg>
      </Link>
    </div>
  )
}