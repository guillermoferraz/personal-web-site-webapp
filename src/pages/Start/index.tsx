import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import '../../i18n/i18n'

/* Components */
import LanguageSelector from '../../components/LanguageSelector'

/* Styles */
import styles from '../../styles/Start.module.scss'

const Start = () => {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>Skeleton Next App</title>
        <meta name="description" content="Skeleton of next app, redux, i18n and TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LanguageSelector />
      <section>
        <h5>{t('title.languageSelector')}</h5>
        <h1>Skeleton App</h1>
        <button onClick={() => router.push('/Home')}>{t('buttons.goHomePage')}</button>

        <article style={{ padding: 20, border: '1px solid #3d43ff' }}>
          <section>
            <p>
              <i>{t('info.exampleOne')}</i>
            </p>
            <p>
              <b>{t('info.exampleTwo')}</b>
            </p>
          </section>
        </article>

        <p>Redux, TypeScript and i18n</p>
        <p>Author: Guillermo Ferraz</p>
      </section>
    </div>
  )
}

export default Start
