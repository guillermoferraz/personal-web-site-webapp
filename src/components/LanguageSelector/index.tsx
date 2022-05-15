import { useTranslation } from 'react-i18next'
import Image from 'next/image'

/* Flags */
import Sp from '../../../public/flags/spain.svg'
import Fr from '../../../public/flags/france.svg'
import Br from '../../../public/flags/brazil.svg'
import Uk from '../../../public/flags/unitedKingdom.svg'

import styles from './languageSelector.module.scss'

import '../../i18n/i18n'

const LanguageSelector = () => {
  const { t } = useTranslation()
  const handleLanguage = (lang: string) => {
    lang && localStorage.setItem('lng', lang)
    window.location.reload()
  }
  return (
      <div className={styles.container}>
        <div className={styles.flags} onClick={() => handleLanguage('es')}>
          <Image width={30} height={30} src={Sp} alt='' />
          <p>Spanish</p>
        </div>
        <div className={styles.flags} onClick={() => handleLanguage('en')} >
          <Image width={30} height={30} src={Uk} alt='' />
          <p>English</p>
        </div>
        <div className={styles.flags}>
          <Image width={30} height={30} src={Fr} alt='' />
          <p>French</p>
        </div>
        <div className={styles.flags}>
          <Image width={30} height={30} src={Br} alt='' />
          <p>Portuguese</p>
        </div>
      </div>
  )
}
export default LanguageSelector;