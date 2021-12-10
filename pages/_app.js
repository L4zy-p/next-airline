import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import Head from 'next/head';
import Image from 'next/image';

import 'antd/dist/antd.css'
import '@styles/globals.css'
import '@styles/main.scss'

dayjs.extend(duration)

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Sky Airline</title>
      <meta name='description' content='Generated by create next app' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp