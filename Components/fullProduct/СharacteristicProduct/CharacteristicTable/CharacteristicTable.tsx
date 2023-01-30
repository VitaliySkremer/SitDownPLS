import styles from './CharacteristicTable.module.scss'

const table = [
  {name:'Гарантия', value:'18 месяцев'},
  {name:'Артикул', value:'AAA41269004'},
  {name:'Длина', value:'163 см'},
  {name:'Высота', value:'90 см'},
]

export const CharacteristicTable = () => {
  return (
    <table className={styles.table}>
      {table.map(row=>
        <tr key={row.name} className={styles.tr}>
          <td className={[styles.td,styles.td_name].join(' ')}>
            <div className={styles.td_wrapper}>
            <p>
              {row.name}
            </p>
              <div className={styles.dotted}/>
            </div>
          </td>
          <td className={styles.td}>{row.value}</td>
        </tr>
      )}
    </table>
  )
}