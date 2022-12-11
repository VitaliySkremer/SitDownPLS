import {Meta} from "../Meta/utils/Meta";
import {Hero} from "../Components/Hero/Hero";
import {Special} from "../Components/Special/Special";
import {BestRating} from "../Components/BestRating/BestRating";
import {NewCollections} from "../Components/NewCollection/NewCollections";

export default function Main() {
  return (
    <main>
      <Meta title='Главная' description='описание'/>
      <Hero/>
      <Special/>
      <BestRating/>
      <NewCollections/>
    </main>
  )
}