import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux'
import Image from 'next/image'

/* Flags */
import Sp from '../../../public/flags/spain.svg'
import Fr from '../../../public/flags/france.svg'
import Br from '../../../public/flags/brazil.svg'
import Uk from '../../../public/flags/unitedKingdom.svg'

import styles from './languageSelector.module.scss'
import { themeStyles } from '../../styles/theme'

import '../../i18n/i18n'

const LanguageSelector = () => {
  const { t } = useTranslation()
  const { dark } = useSelector((state: RootState) => state.themeState)
  const handleLanguage = (lang: string) => {
    lang && localStorage.setItem('lng', lang)
    window.location.reload()
  }

  const handleHover = (id: string) => {
    ;(document.getElementById(`${id}`) as HTMLDivElement).style.background= dark ? themeStyles.hoverDark : themeStyles.hoverLigth
  }
  const handleOffHover = (id: string) => {
    ;(document.getElementById(`${id}`) as HTMLDivElement).style.background= dark ? themeStyles.backgroundDark : themeStyles.backgroundLight
  }

  

  return (
      <div 
        className={styles.container}
        style={{ backgroundColor: dark ? themeStyles.backgroundDark : themeStyles.backgroundLight }}
        >
        <div 
          onMouseEnter={() => handleHover('item-flags-es')} 
          onMouseLeave={() => handleOffHover('item-flags-es')} 
          style={{ backgroundColor: dark ? themeStyles.backgroundDark : themeStyles.backgroundLight }}
          id="item-flags-es" 
          className={styles.flags} 
          onClick={() => handleLanguage('es')}
          >
          <Image width={30} height={30} src={Sp} alt='' />
          <p>{t('buttons.es')}</p>
        </div>
        <div 
          id="item-flags-en" 
          className={styles.flags} 
          onClick={() => handleLanguage('en')} 
          onMouseEnter={() => handleHover('item-flags-en')} 
          onMouseLeave={() => handleOffHover('item-flags-en')} 
          style={{ backgroundColor: dark ? themeStyles.backgroundDark : themeStyles.backgroundLight }}
          >
          <Image width={30} height={30} src={Uk} alt='' />
          <p>{t('buttons.en')}</p>
        </div>
        <div 
          id="item-flags-fr" 
          className={styles.flags} 
          onClick={() => handleLanguage('fr')}
          onMouseEnter={() => handleHover('item-flags-fr')} 
          onMouseLeave={() => handleOffHover('item-flags-fr')} 
          style={{ backgroundColor: dark ? themeStyles.backgroundDark : themeStyles.backgroundLight }}
          >
          <Image width={30} height={30} src={Fr} alt='' />
          <p>{t('buttons.fr')}</p>
        </div>
        <div 
          id="item-flags-br" 
          className={styles.flags} 
          onClick={() => handleLanguage('br')}
          onMouseEnter={() => handleHover('item-flags-br')} 
          onMouseLeave={() => handleOffHover('item-flags-br')} 
          style={{ backgroundColor: dark ? themeStyles.backgroundDark : themeStyles.backgroundLight }}
          >
          <Image width={30} height={30} src={Br} alt='' />
          <p>{t('buttons.br')}</p>
        </div>
      </div>
  )
}
export default LanguageSelector;