import {HTMLAttributes} from "react";
import styles from './Button.module.scss'
interface IButtonProps extends HTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode;
  fill?: boolean;
  pSmall?: boolean
  className?:string
}

export const Button = ({children,className,fill = false,pSmall=false, ...other}:IButtonProps) => {
  return (
    <button className={[className,styles.button, fill ? styles.button__fill: '',pSmall? styles.button__small:''].join(' ')} {...other}>
      {children}
    </button>
  )
}