import {ReactNode} from "react";
import styles from "./CheckBox.module.scss"

interface ICheckBoxProps {
  children:ReactNode;
}

export const CheckBox = ({children}:ICheckBoxProps) => {
  return (
    <label className={styles.label}>
      <input className={styles.input} type='checkbox'></input>
      <span className={styles.label__text}>
        {children}
      </span>
    </label>
  )
}