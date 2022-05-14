import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Provider } from 'react-redux'
import store from '../redux'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import '../i18n/i18n'

function MyApp({ Component, pageProps }: AppProps) {
  const [renderChild, setRenderChild] = useState(false)

  useEffect(() => {
    setRenderChild(true)
  }, [])

  return (
    <React.Fragment>
      <Provider store={store}>
        <Head>
          <title>Skeleton Next App</title>
          <meta name="description" content="Skeleton of next app, redux, i18n and TypeScript" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {renderChild ? <Component {...pageProps} /> : <div>Loading ...</div>}
      </Provider>
    </React.Fragment>
  )
}

export default MyApp
