import styles from './TopCategories.module.scss';
import {ProductCategory} from "../ProductCategory/ProductCategory";

export interface ITopCategory {
  title: string;
  img: string;
  metaInfo: Array<string>;
}

const topListCategory:ITopCategory[] = [
  {title:'Диваны', img:'img/TopCategory/item1.png', metaInfo:['Прямые','Угловые','Модульные']},
  {title:'Кресла', img:'img/TopCategory/item2.png', metaInfo:['Мягкие','Кресла-кровати']},
  {title:'Кровати', img:'img/TopCategory/item3.png', metaInfo:['Односпальные','Двуспальные']},
  {title:'Тумбы и комоды', img:'img/TopCategory/item4.png', metaInfo:['Тумбы','Комоды']},
  {title:'Стулья', img:'img/TopCategory/item5.png', metaInfo:['Деревянные','Металлокаркас']},
]

export const TopСategories = ()=> {
  return(
    <section className='container section'>
      <h3 className='title'>Топ категории</h3>
      <ul className={styles.top__wrapper}>
          {topListCategory.map((item,index)=>
            <li key={item.title} className={styles.box}>
              <ProductCategory category={item}/>
            </li>
          )}
      </ul>
    </section>
  )
}