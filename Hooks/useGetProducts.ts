import { useEffect, useState} from "react";
import axios from "axios";

export interface IProductFetch {
  id: string;
  title: string;
  price: number;
  images: Array<string>;
}

export const useGetProducts = (url:string) =>{
  const [products, setProducts] = useState<IProductFetch[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    setIsLoading(true)
    axios.get(url)
      .then(res=>{
        setProducts(products.concat(...res.data))
      })
      .finally(()=>{
        setIsLoading(false);
      })
  },[url]);

  return {products, isLoading}
}