import {Input} from "../UI/Input/Input";
import {Button} from "../UI/Button/Button";
import styles from './RegistrateForm.module.scss'

export const RegistrateForm = () => {
  return (
    <form className={styles.form}>
      <Input className={styles.input} placeholder='Введите Ваше имя'/>
      <Input className={styles.input} placeholder='Введите почту'/>
      <Input className={styles.input} placeholder='Введите пароль'/>
      <Input className={styles.input} placeholder='Вставьте ссылку на ваше фоту'/>
      <Button pSmall={true}>
        Зарегистрироваться
      </Button>
    </form>
  )
}