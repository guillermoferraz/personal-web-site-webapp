import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { useTranslation } from 'react-i18next'

/* components */
import BackWall from '../../components/BackWall'

/* styles */
import { themeStyles } from '../../styles/theme.ts'
import styles from './aboutMe.module.scss'

/* Configs */
import '../../i18n/i18n'

const AboutMe: NextPage = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const { dark } = useSelector((state: RootState) => state.themeState)
  return (
    <>
      <BackWall />
      <div
        className={styles.container}
        style={{
          background: dark
            ? themeStyles.backgroundDark
            : themeStyles.backgroundLight,
        }}
      >
        <div
          className={styles.content}
          style={{
            backgroundColor: dark
              ? themeStyles.cardBackgroundDark
              : themeStyles.cardBackgroundLight,
            boxShadow: themeStyles.cardShadow,
            color: dark
              ? themeStyles.textPrimaryDark
              : themeStyles.textPrimaryLight,
          }}
        >
          <p>{t('review.p1')}</p>
          <p>{t('review.p2')}</p>
          <p>{t('review.p3')}</p>
          <p>{t('review.p4')}</p>
          <p>{t('review.p5')}</p>
          <p>{t('review.p6')}</p>
          <p>{t('review.p7')}</p>
          <p>
            {t('review.p8')}
            <span className={styles.link}>{t('review.link')}</span>{' '}
            {t('review.continueP8')}
            <p>{t('review.p9')}</p>
          </p>
        </div>
      </div>
    </>
  )
}
export default AboutMe
