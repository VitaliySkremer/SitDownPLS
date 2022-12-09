import styles from './Search.module.scss'
import {useState} from "react";

interface ISearch extends React.HTMLAttributes<HTMLInputElement>{
  dropList:Array<string>
}

export const Search = ({dropList, ...other}: ISearch) => {
  const [select, setSelect] = useState('');
  const [dropIsActive, setDropsIsActive] = useState(false);


  const selectCategory = (select:string)=>() =>{
    setSelect(select)
    setDropsIsActive(false);
  }

  return (
    <div className={styles.search__wrapper}>
      <form className={styles.form}>
        <div className={styles.input__wrapper}>
          <input className={styles.input} type="text" {...other}/>
          <button className={styles.arrow}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_38571_2213)">
                <path d="M14 11L19 16L14 21" stroke="#A65CF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="16" cy="16" r="15" stroke="#A65CF0" strokeWidth="2"/>
              </g>
              <defs>
                <clipPath id="clip0_38571_2213">
                  <rect width="32" height="32" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </form>
      <div className={styles.dropdown__wrapper}>
        <div className={styles.dropdown__btn_wrapper}>
          <button className={styles.dropdown__btn} onClick={()=>setDropsIsActive(!dropIsActive)}>
            <span>{dropIsActive && !select?'Выбрать категорию': select ? select : 'Категория'}</span>
            <div className={[styles.dropdown__arrow,dropIsActive? styles.dropdown__arrow_active: ''].join(' ')}>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.65674 5.80521L10.5593 0.902607L11.3136 1.65685L5.65674 7.31371L-0.000115871 1.65685L0.754131 0.902607L5.65674 5.80521Z" fill="#A65CF0"/>
              </svg>
            </div>
          </button>
        </div>
        {dropIsActive &&(
          <ul className={styles.dropdown__list}>
            {dropList?.map(item=>
              <li className={styles.dropdown__list_item} key={item}>
                <button onClick={selectCategory(item)} className={styles.dropdown__list_category}>{item}</button>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  )
}