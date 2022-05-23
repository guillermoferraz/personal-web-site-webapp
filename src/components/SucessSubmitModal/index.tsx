import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { useTranslation } from 'react-i18next'

/* Styles */
import { themeStyles } from '../../styles/theme'
import styles from './successSubmitModal.module.scss'

import '../../i18n/i18n'

interface PropTypes {
  data: { email: string; name: string; company: string }
}
const SucessSubmitModal = ({ data }: PropTypes) => {
  const { t } = useTranslation()
  const { dark } = useSelector((state: RootState) => state.themeState)
  const company = data.company && data.company.length > 1 && data.company
  const companyMessage = company && 'de ' + company

  return (
    <div className={styles.container}>
      <div
        className={styles.content}
        style={{
          background: dark
            ? themeStyles.backgroundDark
            : themeStyles.backgroundLight,
          color: dark
            ? themeStyles.textPrimaryDark
            : themeStyles.textPrimaryLight,
        }}
      >
        <p>
          <b>{data.name}</b>&nbsp;
          {company && <b>{companyMessage}</b>}
          {`${t('messages.autoResponseModalSuccess')}`}
        </p>
        <p>
          <b>{data.email}</b>
        </p>
      </div>
    </div>
  )
}
export default SucessSubmitModal
