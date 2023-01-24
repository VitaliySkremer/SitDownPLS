import { InputHTMLAttributes} from "react";
import styles from './Input.module.scss'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
  className?:string
}

export const Input = ({className,...other}:IInputProps) => {
  return (
    <input type='text' className={[styles.input, className].join(' ')} {...other}/>
  )
}