import { useEffect } from 'react'
import { useSelector } from 'react-redux'

/* Redux data */
import { getTheme } from '../../redux/theme'
import { RootState } from '../../redux'
import { useAppDispatch } from '../../hooks'

/* Types styles */
import { StylesTypes } from '../../styles/StylesTypes'

/* Styles */
import { themeStyles } from '../../styles/theme'
import { makeStyles } from '@mui/styles'
const Links = () => {
  const dispatch = useAppDispatch()
  const { dark } = useSelector((state: RootState) => state.themeState)
  const classes = styles()

  useEffect(() => {
    dispatch(getTheme())
  },[dispatch])

  return (
    <div 
      className={classes.container}
      >
      <div className={classes.containerItem}>
        <p className={classes.item}>Acerca de mi</p>
      </div>
      <div className={classes.containerItem}>
        <p className={classes.item}>contacto</p>
      </div>
      <div className={classes.containerItem}>
        <p className={classes.item}>Blog</p>
      </div>
      <div className={classes.containerItem}>
        <p className={classes.item}>Mis Habilidades</p>
      </div>
      <div className={classes.containerItem}>
        <p className={classes.item}>Porfolio</p>
      </div>
      <div className={classes.containerItem}>
        <p className={classes.item}>CV</p>
      </div>
    </div>
  )
}
const styles = makeStyles({
  container: {
    width: '90%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  containerItem: {
    margin: 9,
    padding: 14,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 500,
    '&:hover':{
      borderBottom: `1px solid ${themeStyles.lineDark}`,
      borderTop: `1px solid ${themeStyles.lineDark}`,
      margin: 8,
      padding: 13,
      cursor: 'pointer',
      opacity: .70
    }
  },
  item: {
    padding: 0,
    margin: 0,
  }
})
export default Links