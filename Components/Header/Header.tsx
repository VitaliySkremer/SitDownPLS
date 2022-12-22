import {HeaderTitle} from "./HeaderTitle";
import styles from './Header.module.scss'
import {HeaderMain} from "./HeaderMain";
import {HeaderBottom} from "./HeaderBottom";
export const Header = () => {
  return (
    <header className={styles.header__wrapper}>
      <HeaderTitle/>
      <div className='container'>
        <HeaderMain/>
        <HeaderBottom/>
      </div>
    </header>
  )
}