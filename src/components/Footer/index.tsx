import { useSelector } from 'react-redux'
import { RootState } from '../../store';

/* Styles */
import { themeStyles } from '../../styles/theme';
import styles from './footer.module.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

/* Constants / configs */
import { constantsTypes } from '../../constants/constants';

const Footer = () => {
  const { dark } = useSelector((state: RootState) => state.themeState)

  return (
    <footer 
      className={styles.container}
      style={{ backgroundColor: dark ? themeStyles.primaryDark : themeStyles.primaryLight }}
      >
     <div className={styles.containerIcons}>
      <a
      href='https://www.linkedin.com/in/guillermo-ferraz-b24b231b4'
      target='_blank'
      title='LinkedIn Guillermo Ferraz'
      rel="noreferrer"
      >
        <LinkedInIcon 
        style={{ color: '#0A66C2' }}
        />
      </a>
      <a
       href='https://github.com/guillermoferraz'
       target='_blank'
       title='Github Guillermo Ferraz' 
       rel="noreferrer"
      >
        <GitHubIcon 
        style={{ color: dark ? themeStyles.textPrimaryDark : themeStyles.textPrimaryLight}}
        />
      </a>
      <a
       href='https://api.whatsapp.com/send?phone=092821924&text=Contacto desde Guillermo Ferraz Web'
       target='_blank'
       title='WhatsApp Guillermo Ferraz'
       rel="noreferrer"
      >
        <WhatsAppIcon 
        style={{ color: 'rgb(0, 230, 118)' }}
        />
      </a>
      <div className={styles.containerText}>
       <p style={{ color: dark ? themeStyles.textPrimaryDark : themeStyles.textPrimaryLight}}>{constantsTypes.FOOTER_TEXT}</p>
     </div>
     </div>
    </footer>
  )
}
export default Footer