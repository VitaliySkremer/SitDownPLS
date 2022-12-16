import styles from './Footer.module.scss'
import {FooterSocial} from "./FooterSocial";
import {FooterListLinks} from "./FooterListLinks";

interface IFooterLink {
  name: string;
  link: string;
}

export interface IFooterListLink {
  title: string;
  links: IFooterLink[];
}

const AboutAs:IFooterListLink = {
  title:'О нас',
  links:[
    { name: 'О компании', link: '/' },
    { name: 'Блог', link: '/'}
  ]
}

const Services:IFooterListLink = {
  title: 'Услуги',
  links: [
    { name: 'Доставка', link: '/' },
    { name: 'Рассрочка и кредит', link: '/'},
    { name: 'Сборка и установка', link: '/'},
  ]
}

const ConnectionList:IFooterListLink = {
  title: 'Связь с нами',
  links: [
    { name: 'Обратная связь', link: '/' },
    { name: 'Контакты', link: '/'},
  ]
}

const CooperationList:IFooterListLink = {
  title: 'Сотрудничество',
  links: [
    { name: 'Поставщикам', link: '/' },
    { name: 'Оптовикам', link: '/'},
    { name: 'Карьера', link: '/'},
  ]
}

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={['container', styles.footer__content].join(' ')}>
        <FooterSocial/>
        <FooterListLinks title={AboutAs.title} links={AboutAs.links}/>
        <FooterListLinks title={Services.title} links={Services.links}/>
        <FooterListLinks title={ConnectionList.title} links={ConnectionList.links}/>
        <FooterListLinks title={CooperationList.title} links={CooperationList.links}/>
      </div>
      <small className={styles.small}>
        SDP®   2011-{new Date().getFullYear()}
      </small>
    </footer>
  )
}