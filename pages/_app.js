import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

import '../styles/globals.css'

dayjs.extend(duration)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
