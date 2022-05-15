import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../hooks'
import { RootState } from '../../redux'
import Image from 'next/image'
import '../../i18n/i18n'

/* Store */
import exampleSlice, { getExample, postExample } from '../../redux/example'

/* Constants */
import { constantsTypes } from '../../constants/constants'
import { ExampleDataTypes } from '../../redux/types/exampleTypes'

/* Styles */
import styles from '../../styles/home.module.scss'

const Start = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { exampleData, examplePostData } = useSelector((state: RootState) => state.exampleState)
  const { setCleanExampleData } = exampleSlice.actions

  useEffect(() => {
    dispatch(getExample())
  }, [dispatch])

  const handlePostData = (indicator: string) => {
    dispatch(postExample(indicator))
  }
  const handleClean = () => {
    dispatch(setCleanExampleData())
  }


  return (
    <div className={styles.container}>
      <h1>Redux, TypeScript and i18n</h1>
      <button onClick={() => router.push('/Contact')}>Contact</button>
      <section>
        <h5>{t('title.languageSelector')}</h5>
        <h1>Skeleton App</h1>

        <div style={{ display: 'flex' }}>
          <div style={{ margin: 25, padding: 25, border: '1px solid red', width: 'max-content' }}>
            {exampleData && exampleData === constantsTypes.PENDING && <><br /><p>{t('loading.pending')}</p><br /></>}
            {exampleData && exampleData !== constantsTypes.PENDING && (
              <div style={{ border: '1px solid grey', width: 'max-content', padding: 15 }}>
                <p>{exampleData.title}</p>
                <br />
                <i>{exampleData.description}</i>
                <br />
                <Image src={exampleData.image} width={150} height={150} alt='image' />
              </div>
            )}
          </div>
          <div style={{ border: '1px solid grey' }}>
            <div style={{ display: 'flex' }}>
              <button onClick={() => handlePostData('1')} style={{ margin: 10 }} >{t('buttons.exampleOne')}</button>
              <button onClick={() => handlePostData('2')} style={{ margin: 10 }} >{t('buttons.exampleTwo')}</button>
              <button onClick={() => handlePostData('3')} style={{ margin: 10 }} >{t('buttons.exampleThree')}</button>
              <button onClick={() => handleClean()} style={{ margin: 10, backgroundColor: 'red' }} >{t('buttons.cleanState')}</button>
            </div>
            {!examplePostData && <h4 style={{padding: 20, textAlign: 'center', width: '100%'}}>{t('info.noData')}</h4>}
            {examplePostData && examplePostData === constantsTypes.PENDING && <><br /><p>{t('loading.pending')}</p><br /></>}
            <div style={{ maxHeight: 320, overflowX: 'auto' }}>
            {examplePostData && examplePostData !== constantsTypes.PENDING && examplePostData.map((item: ExampleDataTypes) => (
              <div key={item.id} style={{ margin:'auto', width: 'max-content' }}>
                <p>{item.title}</p>
                <br />
                <i>{item.description}</i>
                <br />
                <Image src={item.image || ''} width={150} height={150} alt={`image-${item.id}`} />
              </div>
            ))}
            </div>
          </div>
        </div>

        <article style={{ padding: 20, border: '1px solid #3d43ff', margin: 20 }}>
          <section>
            <p>
              <i>{t('info.exampleOne')}</i>
            </p>
            <p>
              <b>{t('info.exampleTwo')}</b>
            </p>
          </section>
        </article>
        <p>Author: <b>Guillermo Ferraz</b></p>
      </section>
    </div>
  )
}

export default Start
