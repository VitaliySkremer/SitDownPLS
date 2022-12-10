import styles from './Hero.module.scss'
import {HeroSwiper} from "./HeroSwiper";

export interface ISwipes {
  bg: string;
  title: string;
  link: string;
  textColor?: string
}

const Swipes:ISwipes[] = [
  {bg:'img/Hero/item1.jpg', title:'Скидка 15% на первую покупку', link:'/404'},
  {bg:'img/Hero/item2.jpg', title:'1000+ аксессуаров для дома', link:'/404'},
  {bg:'img/Hero/item3.jpg', title:'Коллекция стильного и яркого текстиля',textColor:'var(--white)', link:'/404'},
]

export const Hero = () => {
  return (
    <section className={['section', styles.hero].join(' ')}>
      <HeroSwiper Swipes={Swipes}/>
    </section>
  )
}