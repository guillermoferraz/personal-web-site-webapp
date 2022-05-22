import { useSelector } from 'react-redux'
import { RootState } from '../../store'

/* Styles */
import { themeStyles } from '../../styles/theme'
import styles from './successSubmitModal.module.scss'

interface PropTypes {
  data: { email: string; name: string; company: string }
}
const SucessSubmitModal = ({ data }: PropTypes) => {
  const { dark } = useSelector((state: RootState) => state.themeState)

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
        <p>{`Enviado por: ${data.name}`}</p>
        <p>{`Email: ${data.email}`}</p>
        {data.company.length > 1 && <p>{`Compnay: ${data.company}`}</p>}
      </div>
    </div>
  )
}
export default SucessSubmitModal
