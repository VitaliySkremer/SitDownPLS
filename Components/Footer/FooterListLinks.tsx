import {IFooterListLink} from "./Footer";
import Link from "next/link";
import  styles from './Footer.module.scss'

export const FooterListLinks = ({title, links}:IFooterListLink) => {
  return (
    <div>
      <h5 className={styles.link__title}>{title}</h5>
      <ul className={styles.list__links}>
        {links.map(item=>
          <li key={item.name}>
            <Link className={styles.list__links_item} href={item.link}>{item.name}</Link>
          </li>
        )}
      </ul>
    </div>
  )
}