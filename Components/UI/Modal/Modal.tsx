import styles from './Modal.module.scss'
import {ReactNode, useRef} from "react";
import {useOnClickOutside} from "next/dist/client/components/react-dev-overlay/internal/hooks/use-on-click-outside";

interface IModalProps {
  children:ReactNode,
  setModal:()=>void,
}

export const Modal = ({setModal,children}:IModalProps) => {

  const modalClick = (event: React.MouseEvent) => {
    setModal();
  }

  return (
    <div className={styles.modal__wrapper}>
      <div onClick={modalClick} className={styles.modal__backdoor}/>
      <div className={styles.modal}>
        {children}
      </div>
    </div>
  )
}