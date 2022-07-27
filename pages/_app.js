// import { Provider } from 'react-redux'
import '../styles/globals.css'
// import { configureStore } from "@reduxjs/toolkit";
// import reducer from '../components/Coins/reducers'

function MyApp({ Component, pageProps }) {

  // const store = configureStore(
  //       {reducer: reducer},
  // );

    return (
      // <Provider store={store}>
        <Component {...pageProps} />
      // </Provider>
    )
}

export default MyApp
