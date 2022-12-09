import {HeaderTitle} from "./HeaderTitle";
import styles from './Header.module.scss'
import {HeaderMain} from "./HeaderMain";
import {HeaderBottom} from "./HeaderBottom";
export const Header = () => {
  return (
    <header>
      <HeaderTitle/>
      <div className='container'>
        <HeaderMain/>
        <HeaderBottom/>
      </div>
    </header>
  )
}