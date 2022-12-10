import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {useCallback, useEffect, useRef, useState} from 'react';
import styles from './Special.module.scss'
import axios from "axios";
import {Product} from "./Product/Product";
import {Loader} from "../UI/Loader/Loader";

export interface ISpecial {
  id: string;
  title: string;
  price: number;
  images: Array<string>;
}

export const Special = () => {
  const [special, setSpecial] = useState<ISpecial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const swiperRef = useRef<any>(null);

  const prevSlide = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();
  }, [swiperRef]);

  const nextSlide = useCallback(() => {
    swiperRef.current?.swiper.slideNext();
  }, [swiperRef]);

  useEffect(() =>{
    setIsLoading(true)
    axios.get('https://api.escuelajs.co/api/v1/categories/3/products?offset=0&limit=6')
      .then(res=>{
        setSpecial(res.data)
      })
      .finally(()=>{
        console.log('123')
        setIsLoading(false);
      })
  },[]);

  return (
    <section className={['container','section'].join(' ')}>
      <div className={styles.navigation}>
        <h3 className={styles.title}>Специальные предложения</h3>
        <div className={styles.btn__wrapper}>
          <button className={[styles.btn, styles.btn_prev, 'left-floating-el'].join(' ')} onClick={prevSlide}>
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6L1 11" stroke="#A65CF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className={styles.btn} onClick={nextSlide}>
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6L1 11" stroke="#A65CF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
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
            {special.map(item=>
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