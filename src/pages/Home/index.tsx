import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import '../../i18n/i18n'

/*Components */
import Banner from '../../components/Banner'
import MenuLeft from '../../components/MenuLeft'
import Links from '../../components/Links'

/* Store */
import { getTheme } from '../../store/theme'
import { RootState } from '../../store'
import { useAppDispatch } from '../../hooks'


/* Styles */
import styles from '../../styles/home.module.scss'
import { themeStyles } from '../../styles/theme'

const Start = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { dark } = useSelector((state: RootState) => state.themeState)

  useEffect(() => {
    (
      dispatch(getTheme())
    )
  }, [dispatch, dark])

  return (
    <div className={styles.container} style={{ backgroundColor: dark ? themeStyles.backgroundDark : themeStyles.backgroundLight }}>
      <Banner />
      <div className={styles.content}>
        <MenuLeft />
        <div>
          <Links/>
          <div
            className={styles.textContainer}
            style={{
              backgroundColor: dark ? themeStyles.cardBackgroundDark : themeStyles.cardBackgroundLight,
              boxShadow: themeStyles.cardShadow,
              color: dark ? themeStyles.textPrimaryDark : themeStyles.textPrimaryLight
            }}
          >
            <p>{t('info.text_1')}</p>
            <p>{t('info.text_2')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Start
