import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { useTranslation } from 'react-i18next'

/* Styles */
import { themeStyles } from '../../styles/theme'
import styles from './successSubmitModal.module.scss'
import CancelIcon from '@mui/icons-material/Cancel'
import '../../i18n/i18n'

interface PropTypes {
  data: { email: string; name: string; company: string }
  open: boolean
  setOpen: () => void
}
const SucessSubmitModal = ({ data, open, setOpen }: PropTypes) => {
  const { t } = useTranslation()
  const { dark } = useSelector((state: RootState) => state.themeState)
  const company = data.company && data.company.length > 1 && data.company
  const companyMessage = company && `${t('messages.from')}` + company

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
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <CancelIcon
            style={{
              color: dark
                ? themeStyles.textPrimaryDark
                : themeStyles.textPrimaryLight,
            }}
            onClick={() => setOpen()}
          />
        </div>

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
