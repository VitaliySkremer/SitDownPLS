import {useEffect, useState} from "react";
import axios from "axios";

export interface FullDataProduct{
  id: string;
  title: string;
  price: number;
  images: Array<string>;
  creationAt: string;
  description: string;
}

export const useGetFullDataProduct =(url:string) =>{
  const [product, setProduct] = useState<FullDataProduct | null>(null)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setIsLoading(true)
    axios.get<FullDataProduct>(url)
      .then(res=>{
        setProduct(res.data)
      })
      .finally(()=> setIsLoading(false))
  },[url])

  return {product, isLoading};
}