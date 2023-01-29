import {FullProduct} from "../../Components/fullProduct/FullProduct";
import {useRouter} from "next/router";

export default function product() {
  const router = useRouter()
  const {id} = router.query;

  return (
    <main className='container'>
      <FullProduct id={id as string}/>
    </main>
  )
}