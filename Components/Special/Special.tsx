import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {useCallback, useRef } from 'react';
import SlideNextButton from "./SlideNextButton";


export const Special = () => {
  const swiperRef = useRef<any>(null);

  const prevSlide = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();
  }, [swiperRef]);

  const nextSlide = useCallback(() => {
    swiperRef.current?.swiper.slideNext();
  }, [swiperRef]);

  return (
    <section className='container'>
      <div>
        <h3>Специальные предложения</h3>
        <div>
          <button onClick={nextSlide}>Slide to the next slide</button>
          <button onClick={prevSlide}>Slide to the next slide</button>
        </div>
      </div>
      <div>
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
        >
            <SwiperSlide>
              1
            </SwiperSlide>
            <SwiperSlide>
              2
            </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}