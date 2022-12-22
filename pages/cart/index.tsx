import { Meta } from "../../Meta/utils/Meta";
import {CartProducts} from "../../Components/Cart/CartProducts/CartProducts";

export default function Main() {
  return (
    <main>
      <Meta title='Корзина' description='корзина'/>
      <div className='container'>
        <CartProducts/>
      </div>
    </main>
  )
}