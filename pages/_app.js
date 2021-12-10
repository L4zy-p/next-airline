import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

import 'antd/dist/antd.css'
import '@styles/globals.css'
import '@styles/main.scss'

dayjs.extend(duration)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
