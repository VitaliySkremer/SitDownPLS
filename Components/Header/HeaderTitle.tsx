import Link from "next/link";
import styles from './Header.module.scss'
const links = [
  {link:'/about', title:'О компании'},
  {link:'/returns', title:'Гарантия и возврат'},
  {link:'/clients', title:'Корпоративным клиентам'},
  {link:'/design', title:'Дизайн-решение'},
]
export const HeaderTitle = () => {
  return (
    <div className={styles.header__title}>
      <div className={['container', styles.header__title_block].join(' ')}>
        <div className={styles.header__title_block_contacts}>
          <div className={styles.header__title_block_contacts_region}>
            <span>Ваш регион: &nbsp;</span>
            <span>Москва</span>
          </div>
          <a className={styles.header__title_block_contacts_region_tel} href="tel:89458854547">+7 (945) 885-45-47</a>
        </div>
        <nav>
          <ul className={styles.header__title_nav}>
            {links.map(item=><li className={styles.header__title_nav_item} key={item.title}>
              <Link className={styles.header__title_nav_link} href={item.link}>{item.title}</Link>
            </li>)}
          </ul>
        </nav>
      </div>
    </div>
  )
}