import {Meta} from "../Meta/utils/Meta";
import {Hero} from "../Components/Hero/Hero";
import {Special} from "../Components/Special/Special";
import {BestRating} from "../Components/BestRating/BestRating";
import {NewCollections} from "../Components/NewCollection/NewCollections";
import {TopСategories} from "../Components/TopСategories/TopСategories";
import {FeedbackForm} from "../Components/FeedbackForm/FeedbackForm";
import {UsefulProducts} from "../Components/UsefulProducts/UsefulProducts";

export default function Main() {
  return (
    <main>
      <Meta title='Главная' description='описание'/>
      <Hero/>
      <Special/>
      <BestRating/>
      <NewCollections/>
      <TopСategories/>
      <UsefulProducts/>
      <FeedbackForm/>
    </main>
  )
}