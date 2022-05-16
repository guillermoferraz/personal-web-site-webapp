import { useSelector } from 'react-redux'
import { RootState } from '../../redux'
import Image from 'next/image'

/* Styles */
import styles from './menuLeft.module.scss'
import { themeStyles } from '../../styles/theme'
import Photo from '../../../public/images/photo_edited.jpg'

const MenuLeft = () => {
  const { dark } = useSelector((state: RootState) => state.themeState)
  return (
    <div className={styles.container} style={{ borderRight: dark ? `1px solid ${themeStyles.lineDark}` : `1px solid ${themeStyles.lineLight}` }}>
      <div className={styles.containerPhoto}>
        <Image src={Photo} alt="Guillermo Ferraz" />
      </div>
    </div>
  )
}
export default MenuLeft