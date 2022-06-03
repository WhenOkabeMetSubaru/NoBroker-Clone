import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import SmallDevice from '../components/SmallDevice'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <NavBar/>
  <Component {...pageProps} />
  <Footer/>
  <SmallDevice/>
  </>
}

export default MyApp
