import React, { useEffect, useState } from 'react'
import Image from 'next/image'
/* Flags */
import Sp from '../../../public/flags/spain.svg'
import Fr from '../../../public/flags/france.svg'
import Br from '../../../public/flags/brazil.svg'
import Uk from '../../../public/flags/unitedKingdom.svg'

/* Components */
import LanguageSelector from '../LanguageSelector'

/* Styles */
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Switch from '@mui/material/Switch';
import styles from './navbar.module.scss'


const Navbar = () => {
  const [openLanguages, setOpenLanguages] = useState<boolean>(false)
  const [languageSelected, setLanguageSelected] = useState<string>('')
  const label = { inputProps: { 'aria-label': 'Switch theme' } };

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

  return (
    <nav className={styles.container}>

      {openLanguages && (<div className={styles.backWall} onClick={() => setOpenLanguages(false)} />)}
      <div className={styles.containerSwitch}>
        <div className={styles.iconSun} >
          <LightModeIcon/>
        </div>
        <Switch {...label} />
        <div className={styles.iconMoon}>
          <ModeNightIcon/>
        </div>
      </div>
      <div onClick={() => setOpenLanguages(!openLanguages)} className={styles.languageItem}>
        <div className={styles.flagSelected}>
          {flagSelected(languageSelected)}
        </div>
        {!openLanguages ? (<ArrowDropDownIcon className={styles.arrow}/>) : (<ArrowDropUpIcon className={styles.arrow}/>)}
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