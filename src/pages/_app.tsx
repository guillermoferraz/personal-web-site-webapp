import { useEffect, useState } from 'react'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import '../i18n/i18n'

function MyApp({ Component, pageProps }: AppProps) {
  const [renderChild, setRenderChild] = useState(false)

  useEffect(() => {
    setRenderChild(true)
  },[])

  return renderChild ? <Component {...pageProps} /> : <div>Loading ...</div>
}

export default MyApp
