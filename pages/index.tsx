import {Meta} from "../Meta/utils/Meta";
import {Hero} from "../Components/Hero/Hero";
import {Special} from "../Components/Special/Special";

export default function Main() {
  return (
    <main>
      <Meta title='Главная' description='описание'/>
      <Hero/>
      <Special/>
    </main>
  )
}