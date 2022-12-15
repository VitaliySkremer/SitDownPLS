import {Input} from "../UI/Input/Input";
import {Button} from "../UI/Button/Button";
import {CheckBox} from "../UI/CheckBox/CheckBox";
import styles from './FeedbakcForm.module.scss'
import Link from "next/link";

export const FeedbackForm = () => {

  const handleSubmit = (event: React.FormEvent) =>{
    event.preventDefault();
  }

  return (
    <section className={['container','section',styles.feedback__wrapper].join(' ')}>
      <div className={styles.feedback__content}>
        <h3 className='title'>Мы всегда вам рады!</h3>
        <p className={styles.feedback__description}>
          Безусловно, новая модель организационной деятельности в значительной степени обусловливает важность распределения внутренних резервов и ресурсов.
        </p>
        <form onSubmit={handleSubmit}>
          <Input style={{marginBottom:'30px'}} placeholder='Как вас зовут?'/>
          <Input style={{marginBottom:'30px'}} placeholder='Ваш телефон'/>
          <Input style={{marginBottom:'30px'}} placeholder='Ваш e-mail'/>
          <Button fill={true} pSmall={true} style={{marginBottom:'12px'}}>
            Отправить
          </Button>
          <CheckBox>
            Принимаю &nbsp;<Link href='/' className={styles.checkbox__text}>пользовательское соглашение</Link>
          </CheckBox>
        </form>
      </div>
      <img className={styles.feedback__pre} src="img/feedback/feedback.png" alt=""/>
    </section>
  )
}