import {NavigateSwiper} from "../UI/NavigateSwiper/NavigateSwiper";
import {useNavigateSwiper} from "../../Hooks/useNavigateSwiper";
import styles from './UsefulProducts.module.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import {Product} from "../Product/Product";
import {BlogCart} from "../BLogCart/BlogCart";

export interface IBLog {
  img: string;
  body: string;
  link: string;
}

const blogs:IBLog[] = [
  {img:'img/Blogs/item1.jpg', body:'И нет сомнений, что сделанные на базе интернет-аналитики выводы представляют собой не что иное?', link:'/'},
  {img:'img/Blogs/item2.jpg', body:'Как принято считать, некоторые особенности приносят несомненную пользу обществу?', link:'/'},
  {img:'img/Blogs/item3.jpg', body:'Ясность нашей позиции очевидна: укрепление и развитие внутренней структуры?', link:'/'},
  {img:'img/Blogs/item4.jpg', body:'Прежде всего, консультация с широким активом однозначно фиксирует необходимость распределения?', link:'/'},
  {img:'img/Blogs/item5.jpg', body:'Как принято считать, некоторые особенности приносят несомненную пользу обществу?', link:'/'},
]

export const UsefulProducts = () => {
  const {swiperRef, prevSlide, nextSlide} = useNavigateSwiper();

  return (
    <section className='container section'>
      <div className={styles.navigation}>
        <h3 className='title'>Полезное</h3>
        <NavigateSwiper prevSlide={prevSlide} nextSlide={nextSlide}/>
      </div>
      <Swiper
        ref={swiperRef}
        slidesPerView={2}
        spaceBetween={32}
        loop={true}
      >
        {blogs.map(item=>
          <SwiperSlide key={item.body}>
            <BlogCart img={item.img} body={item.body} link={item.link}/>
          </SwiperSlide>
        )}
      </Swiper>
    </section>
  )
}