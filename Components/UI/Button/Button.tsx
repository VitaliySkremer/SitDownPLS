import {HTMLAttributes} from "react";
import styles from './Button.module.scss'
interface IButtonProps extends HTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode;
  fill?: boolean;
}

export const Button = ({children,fill = false, ...other}:IButtonProps) => {
  return (
    <button className={[styles.button, fill ? styles.button__fill: ''].join(' ')} {...other}>
      {children}
    </button>
  )
}