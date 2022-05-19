import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

import styles from './logo.module.scss'
import { themeStyles } from '../../styles/theme'

const Logo = () => {
  const router = useRouter()
  const { dark } = useSelector((state: RootState) => state.themeState)
  return (
    <div 
      title="Guillermo Ferraz Web" 
      className={styles.container} 
      style={{ color: dark ? themeStyles.textPrimaryDark : themeStyles.textPrimaryLight }}
      onClick={() => router.push("/")}
      >
      <p>{'GF'}</p>
      <p>{'Web'}</p>
      <p>{'</>'}</p>
    </div>
  )
}
export default Logo