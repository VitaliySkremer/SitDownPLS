import {Input} from "../UI/Input/Input";
import {FormEvent, useEffect, useState} from "react";
import {Button} from "../UI/Button/Button";
import styles from './AuthForm.module.scss'

export const AuthForm = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handlerSubmit = (event:FormEvent) =>{
    event.preventDefault();

    fetch('https://api.escuelajs.co/api/v1/auth/login',{
      method:'POST',
      body:JSON.stringify({
        "email": "john@mail.com",
        "password": "changeme"
      }),
      headers:{
        "Content-Type": "application/json"
      }
    })
      .then(res=> res.json())
      .then(data=>console.log(data))
  }

  return (
    <form onSubmit={handlerSubmit}>
      <Input
        value={login}
        onChange={event=>setLogin(event.target.value)}
        placeholder='Введите логин'
        className={styles.name}
      />
      <Input
        value={password}
        onChange={event=>setPassword(event.target.value)}
        placeholder='Введите пароль'
        className={styles.password}
      />
      <Button pSmall={true}>
        Войти
      </Button>
    </form>
  )
}