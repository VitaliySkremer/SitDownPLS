import {useCallback, useRef} from "react";

export const useNavigateSwiper = () =>{
  const swiperRef = useRef<any>(null);

  const prevSlide = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();
  }, [swiperRef]);

  const nextSlide = useCallback(() => {
    swiperRef.current?.swiper.slideNext();
  }, [swiperRef]);

  return {swiperRef, prevSlide, nextSlide}
}