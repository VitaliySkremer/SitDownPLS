import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import {Header} from "../Components/Header/Header";
import { Footer } from '../Components/Footer/Footer';
import {Provider} from "react-redux";
import {setupStore} from "../Store/store";
export default function App({ Component, pageProps }: AppProps) {

  return (
    <div>
      <Provider store={setupStore()}>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </Provider>
    </div>
  )
}
