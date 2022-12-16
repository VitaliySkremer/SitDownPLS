import styles from './NavigateSwiper.module.scss'

interface INavigateSwiperProps {
  prevSlide: ()=> void;
  nextSlide: ()=>void;
}

export const NavigateSwiper = ({prevSlide, nextSlide}:INavigateSwiperProps) => {
  return (
    <div className={styles.btn__wrapper}>
      <button className={[styles.btn, styles.btn_prev, 'floating-el'].join(' ')} onClick={prevSlide}>
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L6 6L1 11" stroke="#A65CF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button className={[styles.btn,'floating-el'].join(' ')} onClick={nextSlide}>
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L6 6L1 11" stroke="#A65CF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  )
}