import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';
import {ISwipes} from "./Hero";
import {Swipe} from "./Swipe/Swipe";

interface IHeroSwiper {
  Swipes: ISwipes[];
}

export const HeroSwiper = ({Swipes}:IHeroSwiper) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {Swipes.map(item=>
          <SwiperSlide key={item.title}>
            <Swipe
              textColor = {item.textColor}
              bg={item.bg}
              title={item.title}
              link={item.link}
            />
          </SwiperSlide>
        )}
      </Swiper>
    </>
  )
}