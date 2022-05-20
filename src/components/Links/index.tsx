import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

/* Redux data */
import { getTheme } from '../../store/theme'
import { RootState } from '../../store'
import { useAppDispatch } from '../../hooks'

/* Types styles */
import { StylesTypes } from '../../styles/StylesTypes'

/* Styles */
import { themeStyles } from '../../styles/theme'
import { makeStyles } from '@mui/styles'

import '../../i18n/i18n'

const Links = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { t }  = useTranslation()
  const { dark } = useSelector((state: RootState) => state.themeState)
  const classes = styles({ dark: dark })

  const [activeButtonsMobile, setActiveButtonsMobile] = useState<boolean>(false)

  useEffect(() => {
    dispatch(getTheme())
    classes
  },[classes, dispatch])

  const handleDetectSize = () => {
    if(window.innerWidth < 600){
      setActiveButtonsMobile(true)
    } else {
      setActiveButtonsMobile(false)
    }
  }

  useEffect(() => {
    addEventListener('resize', handleDetectSize)
  },[])


  return (
    <div 
      className={classes.container}
      style={{ color: dark ? themeStyles.textPrimaryDark : themeStyles.textPrimaryLight }}
      >
      <div 
        id='about-me-btn' className={classes.containerItem}
        onClick={() => router.push('/AboutMe')}
        style={{ border: activeButtonsMobile ? dark ? `1px solid ${themeStyles.hoverLigth}` : `1px solid ${themeStyles.hoverDark}` : ''}}
        >
        <p className={classes.item}>
            {t('links.aboutMe')}
          </p>
      </div>
      <div 
        id='contact-btn' 
        className={classes.containerItem} 
        onClick={() => router.push('/Contact')}
        style={{ border: activeButtonsMobile ? dark ? `1px solid ${themeStyles.hoverLigth}` : `1px solid ${themeStyles.hoverDark}` : ''}}
        >
        <p className={classes.item}>{t('links.contact')}</p>
      </div>
      <div 
        id='blog-btn' 
        className={classes.containerItem}  
        onClick={() => router.push('/Blog')}
        style={{ border: activeButtonsMobile ? dark ? `1px solid ${themeStyles.hoverLigth}` : `1px solid ${themeStyles.hoverDark}` : ''}}
        >
        <p className={classes.item}>{t('links.blog')}</p>
      </div>
      <div 
        id='portfolio-btn' 
        className={classes.containerItem} 
        onClick={() => router.push('/Portfolio')}
        style={{ border: activeButtonsMobile ? dark ? `1px solid ${themeStyles.hoverLigth}` : `1px solid ${themeStyles.hoverDark}` : ''}}
        >
        <p className={classes.item}>{t('links.portfolio')}</p>
      </div>
      <div 
        id='cv-btn' 
        className={classes.containerItem} 
        onClick={() => router.push('/Cv')}
        style={{ border: activeButtonsMobile ? dark ? `1px solid ${themeStyles.hoverLigth}` : `1px solid ${themeStyles.hoverDark}` : ''}}
        >
        <p className={classes.item}>{t('links.CV')}</p>
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
    ['@media (max-width: 599px)']:{
      display: 'inline',
    }
  },
  containerItem: {
    margin: 9,
    padding: 14,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 500,
    '&:hover':{
      margin: 8,
      padding: 13,
      cursor: 'pointer',
      opacity: .70,
      borderTop: `1px solid ${themeStyles.hoverTextLight}`,
      borderBottom: `1px solid ${themeStyles.hoverTextLight}`,
      color: themeStyles.hoverTextLight
    },
    ['@media (max-width: 599px)']:{
      
    }
  },
  item: {
    padding: 0,
    margin: 0,
  },
})
export default Links