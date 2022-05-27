import styles from './backWall.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { themeStyles } from '../../styles/theme'
const BackWall = () => {
  const { dark } = useSelector((state: RootState) => state.themeState)
  console.log('DARK:', dark)
  const returnSpan = (totalParticles: number) => {
    const array = []
    for (let i = 0; i < totalParticles; i++) {
      array.push(i)
    }
    return array
  }
  return (
    <div
      className={styles.background}
      style={{
        background: dark
          ? themeStyles.backgroundDark
          : themeStyles.backgroundLight,
      }}
    >
      {returnSpan(100).map((index) => (
        <span key={index}></span>
      ))}
    </div>
  )
}
export default BackWall
