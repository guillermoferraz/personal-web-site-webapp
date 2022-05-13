import { useTranslation } from 'react-i18next'
import '../../i18n/i18n'

const LanguageSelector = () => {
  const { t } = useTranslation()
  const handleLanguage = (lang: string) => {
    lang && localStorage.setItem('lng', lang)
    window.location.reload()
  }
  return (
    <div>
      <button onClick={() => handleLanguage('es')} >{t('buttons.es')}</button>
      <button onClick={() => handleLanguage('en')} >{t('buttons.en')}</button>
    </div>
  )
}
export default LanguageSelector;