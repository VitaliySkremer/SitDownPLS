import {HTMLAttributes, ReactNode} from "react";
import styles from "./CheckBox.module.scss"

interface ICheckBoxProps extends HTMLAttributes<HTMLLabelElement>{
  children?:ReactNode;
}

export const CheckBox = ({children, ...other}:ICheckBoxProps) => {
  return (
    <label className={styles.label} {...other}>
      <input className={styles.input} type='checkbox'/>
      <span className={styles.label__text}>
        {children}
      </span>
    </label>
  )
}