import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Provider } from 'react-redux'
import store from '../store'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import '../i18n/i18n'

const  MyApp = ({ Component, pageProps }: AppProps) => {
  const { t } = useTranslation()
  const router = useRouter()
  const [renderChild, setRenderChild] = useState(false)

  useEffect(() => {
    setRenderChild(true)
  }, [])

  const returnAdditionalTitle = (router: { route: string }) => {
    if(router && router.route) {
      switch(router.route){
        case '/Home':
        case '/':
          return '| ' + t('links.home')
        case '/AboutMe':
          return '| ' + t('links.aboutMe')
        case '/Blog':
          return '| ' +t('links.blog')
        case '/Contact':
          return '| ' +t('links.contact')
        case '/Portfolio':
          return '| ' +t('links.portfolio')
        case '/Cv':
          return '| ' +t('links.CV')
        default:
          return ''
      }
    }
  }

  return (
    <React.Fragment>
      <Provider store={store}>
        <Head>
          <title>{`Guillermo Ferraz Web ${returnAdditionalTitle(router)}`}</title>
          <meta name="description" content="Guillermo Ferraz Web"/>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {renderChild ?
          <div style={{ position: 'relative' }}>
            <Navbar />
            <div style={{minHeight: '85vh', maxHeight: '85vh', overflowY: 'auto'}}>
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>
          : <div>Loading ...</div>}
      </Provider>
    </React.Fragment>
  )
}

export default MyApp
