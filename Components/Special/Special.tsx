import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import styles from './Special.module.scss'
import {Product} from "../Product/Product";
import {Loader} from "../UI/Loader/Loader";
import {useGetProducts} from "../../Hooks/useGetProducts";
import {useNavigateSwiper} from "../../Hooks/useNavigateSwiper";
import {NavigateSwiper} from "../UI/NavigateSwiper/NavigateSwiper";

export const Special = () => {
  const {products, isLoading} = useGetProducts('https://api.escuelajs.co/api/v1/categories/3/products?offset=0&limit=6')
  const {swiperRef, prevSlide, nextSlide} = useNavigateSwiper();

  return (
    <section className='container section'>
      <div className={styles.navigation}>
        <h3 className='title'>Специальные предложения</h3>
        <NavigateSwiper prevSlide={prevSlide} nextSlide={nextSlide}/>
      </div>
      <div>
        {isLoading
          ? <Loader/>
          :<Swiper
            ref={swiperRef}
            slidesPerView={3}
            spaceBetween={32}
            loop={true}
          >
            {products.map(item=>
              <SwiperSlide key={item.id}>
                <Product sale={true} product={item}/>
              </SwiperSlide>
            )}
          </Swiper>
        }
      </div>
    </section>
  )
}