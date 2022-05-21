import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { useAppDispatch } from '../../hooks'
import { useRouter } from 'next/router'
import Image from 'next/image'

/* Flags */
import Sp from '../../../public/flags/spain.svg'
import Fr from '../../../public/flags/france.svg'
import Br from '../../../public/flags/brazil.svg'
import Uk from '../../../public/flags/unitedKingdom.svg'

/* Components */
import LanguageSelector from '../LanguageSelector'
import Logo from '../Logo'

/* Styles */
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import HomeIcon from '@mui/icons-material/Home';
import Switch from '@mui/material/Switch';
import styles from './navbar.module.scss'
import { themeStyles } from '../../styles/theme'


/* Redux data */
import { getTheme, changeTheme } from '../../store/theme'

/* Configs */
import { ConstantThemes } from '../../store/types/themeTypes'
import '../../i18n/i18n'

const Navbar = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const { themeData, responseChangeTheme } = useSelector((state: RootState) => state.themeState)
  const { dark } = useSelector((state: RootState) => state.themeState)
  const [openLanguages, setOpenLanguages] = useState<boolean>(false)
  const [languageSelected, setLanguageSelected] = useState<string>('')
  const [checked, setChecked] = useState<boolean>(false)
  const label = { inputProps: { 'aria-label': 'Switch theme' } };

  useEffect(() => {
    dispatch(getTheme())
  }, [responseChangeTheme, dispatch, checked])

  useEffect(() => {
    if (themeData && themeData === ConstantThemes.LIGTH) setChecked(true)
    if (themeData && themeData === ConstantThemes.DARK) setChecked(false)
  }, [themeData])

  useEffect(() => {
    const lng = typeof window !== 'undefined' && localStorage.getItem('lng')
    lng ? setLanguageSelected(lng) : setLanguageSelected('es')
  }, [])

  const flagSelected = (language: string) => {
    switch (language) {
      case 'es':
        return <Image src={Sp} alt="" layout="fixed" width={30} />
      case 'en':
        return <Image src={Uk} alt="" layout="fixed" width={30} />
      case 'fr':
        return <Image src={Fr} alt="" layout="fixed" width={30} />
      case 'br':
        return <Image src={Br} alt="" layout="fixed" width={30} />
      default:
    }
  }

  const handleChecked = (event: boolean) => {
    if (event) {
      dispatch(changeTheme(ConstantThemes.LIGTH))
      setChecked(true)
    } else {
      dispatch(changeTheme(ConstantThemes.DARK))
      setChecked(false)
    }
  }

  return (
    <nav className={styles.container} style={{ backgroundColor: !checked ? themeStyles.primaryDark : themeStyles.primaryLight }}>
      {openLanguages && (<div className={styles.backWall} onClick={() => setOpenLanguages(false)} />)}
      <div>
        <Logo />
      </div>
      {router && router.route !== '/' && ( 
      <div title={t('links.home')} className={styles.iconHome} style={{ color: dark ? themeStyles.textPrimaryDark : themeStyles.textPrimaryLight}}>
        <HomeIcon onClick={() => router.push('/')}/>
      </div>)}
      <div className={styles.containerSwitch}>
        <div className={styles.iconMoon}>
          <ModeNightIcon />
        </div>
        <Switch {...label} checked={checked} onChange={(e) => handleChecked(e.target.checked)} />
        <div className={styles.iconSun} >
          <LightModeIcon />
        </div>

      </div>
      <div onClick={() => setOpenLanguages(!openLanguages)} className={styles.languageItem}>
        <div className={styles.flagSelected}>
          {flagSelected(languageSelected)}
        </div>
        {!openLanguages ? (
          <ArrowDropDownIcon className={styles.arrow} style={{ color: !checked ? themeStyles.textPrimaryDark : themeStyles.textPrimaryLight }} />
        )
          :
          (<ArrowDropUpIcon className={styles.arrow} style={{ color: !checked ? themeStyles.textPrimaryDark : themeStyles.textPrimaryLight }} />)}
        {openLanguages && (
          <div className={styles.containerLanguages}>
            <LanguageSelector />
          </div>
        )}
      </div>
    </nav>
  )
}
export default Navbar