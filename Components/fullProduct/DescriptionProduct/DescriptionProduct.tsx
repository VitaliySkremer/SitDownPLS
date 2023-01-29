import styles from './DeskriptionProduct.module.scss'

interface IDeskriptionProduct {
  mainImg?: string;
  arrImg?:Array<string>;
  title?:string;
  description?:string;
}

export const DescriptionProduct = ({mainImg, arrImg, title, description}:IDeskriptionProduct) => {
  return (
    <div className={styles.container}>
      <img className={styles.title__img} src={mainImg} alt=""/>
      <div className={styles.img__container}>
        {arrImg?.map((item,index)=>
          (
            index!==0 && (<img src={item} alt="мебель" key={item}/>)
          )
        )}
      </div>
      <h5 className={styles.title}>
        {title}
      </h5>
      <p className={styles.deskription}>
        {description}
      </p>
    </div>
  )
}