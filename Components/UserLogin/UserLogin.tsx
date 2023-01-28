import {AuthForm} from "../AuthForm/AuthForm";
import {RegistrateForm} from "../RegistrateForm/RegistrateForm";
import styles from './UserLogin.module.scss'
import {useState} from "react";

enum LoginTabs {
  AUTH = 'Авторизация',
  REGISTR = 'Регистрация'
}

export const UserLogin = () => {

  const [tabValue, setTabValue] = useState<LoginTabs>(LoginTabs.AUTH)

  return (
    <div className={styles.form}>
      <div className={styles.tab}>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="radio"
            checked={tabValue===LoginTabs.AUTH}
            onChange={()=>setTabValue(LoginTabs.AUTH)}
          />
          <span className={styles.span}>
            Авторизация
          </span>
        </label>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="radio"
            checked={tabValue===LoginTabs.REGISTR}
            onChange={()=>setTabValue(LoginTabs.REGISTR)}
          />
          <span className={styles.span}>
            Регистрация
          </span>
        </label>
      </div>
      {tabValue===LoginTabs.AUTH
        ?<AuthForm/>
        :<RegistrateForm/>
      }
    </div>
  )
}