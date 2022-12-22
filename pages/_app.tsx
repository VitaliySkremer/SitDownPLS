import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import {Header} from "../Components/Header/Header";
import { Footer } from '../Components/Footer/Footer';
import {Provider} from "react-redux";
import { store } from '../Store/store';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <div className='app'>
      <Provider store={store}>
        <Header/>
        <Component {...pageProps} />
      </Provider>
      <Footer/>
    </div>
  )
}
