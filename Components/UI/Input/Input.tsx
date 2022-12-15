import {HTMLAttributes} from "react";
import styles from './Input.module.scss'

interface IInputProps extends HTMLAttributes<HTMLInputElement>{}

export const Input = ({...other}:IInputProps) => {
  return (
    <input type='text' className={styles.input} {...other}/>
  )
}