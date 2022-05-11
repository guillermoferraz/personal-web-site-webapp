import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Start.module.scss'

const Start: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skeleton Next App</title>
        <meta name="description" content="Skeleton of next app, redux, i18n and TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h1>Skeleton App</h1>
        <p>Redux, TypeScript and i18n</p>
        <p>Author: Guillermo Ferraz</p>
      </section>
    </div>
  )
}

export default Start
