import styles from './Modal.module.scss'
import {ReactNode, useRef} from "react";
import {useOnClickOutside} from "next/dist/client/components/react-dev-overlay/internal/hooks/use-on-click-outside";

interface IModalProps {
  children:ReactNode,
  setModal:()=>void,
}

export const Modal = ({setModal,children}:IModalProps) => {

  const modalClick = () => {
      setModal();
  }

  return (
    <div onClick={modalClick} className={styles.modal__wrapper}>
      <div onClick={event => event.stopPropagation()} className={styles.modal}>
        {children}
      </div>
    </div>
  )
}