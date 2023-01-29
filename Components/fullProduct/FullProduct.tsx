import {useGetFullDataProduct} from "../../Hooks/useGetFullDataProduct";
import { Loader } from "../UI/Loader/Loader";
import {DescriptionProduct} from "./DescriptionProduct/DescriptionProduct";
import styles from './FullProduct.module.scss'
import {CharacteristicProduct} from "./СharacteristicProduct/CharacteristicProduct";
interface IFullProductProps {
  id: string
}

export const FullProduct = ({id}:IFullProductProps) => {

  const {product, isLoading} = useGetFullDataProduct(`https://api.escuelajs.co/api/v1/products/${id}`)
  console.log(product);
  return (
    <section>
      {isLoading
        ? <Loader/>
        : <div className={styles.container}>
            <DescriptionProduct mainImg={product?.images[0]} arrImg={product?.images} title={product?.title} description={product?.description}/>
            <CharacteristicProduct/>
          </div>
      }
    </section>
  )
}