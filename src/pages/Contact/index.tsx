import { useEffect, useState } from 'react'
import { NextPage } from "next"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"

/* Store */
import { RootState } from "../../store"

/* Components */
import Textfield from "../../components/Textfield"
import ButtonDefault from "../../components/ButtonDefault"

/* Styles */
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import { themeStyles } from "../../styles/theme"
import styles from './contact.module.scss'

/* Configs / constanst */
import { constantsEntryInput } from '../../constants/constants'
import '../../i18n/i18n'

const Contact: NextPage = () => {
  const { t } = useTranslation()
  const { dark } = useSelector((state: RootState) => state.themeState)

  const [email, setEmail] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [company, setCompany] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [characterCounter, setCharacterCounter] = useState<number>(0)
  const [limitedCharacter, setLimitedCharacter] = useState<boolean>(false)
  const limit = 285

  const handleChange = (entry: string, event: string) => {
    if(entry){
      switch(entry){
        case constantsEntryInput.EMAIL:
          setEmail(event)
          break
        case constantsEntryInput.NAME:
          setName(event)
          break
        case constantsEntryInput.COMPANY:
          setCompany(event)
          break
        case constantsEntryInput.MESSAGE:
          !limitedCharacter && setMessage(event)
          break
        default:
      }
    }
  }
  const handleKey = (entry: string, key: string) => {
    if(key && key === 'Delete' || key && key === 'Backspace'){
      switch(entry){
        case constantsEntryInput.MESSAGE:
          limitedCharacter && message && message.length > 2 && setMessage(message.slice(0, message.length -1))
          break
        default:
      }
    }
  }

  useEffect(() => {
    if(message){
      setCharacterCounter(message.length)
    } else {
      setCharacterCounter(0)
    }
  },[message])

  useEffect(() => {
    if(characterCounter && characterCounter > limit){
      setLimitedCharacter(true)
    } else {
      setLimitedCharacter(false)
    }
  },[characterCounter])

  const backColorCounter : string = characterCounter > 150 && characterCounter < 230 ? '#FFC533' : characterCounter >= 230 ? '#EC1414' : themeStyles.hoverLigth

  const handleSubmit = () => {
    console.log('Submit data:',{
      email: email,
      name: name,
      company: company,
      message: message
    })
  }

  return (
    <div style={{backgroundColor: dark ? themeStyles.cardBackgroundDark : themeStyles.backgroundLight}} className={styles.container}>
      <div className={styles.containerForm}>
      <h1 
      className={styles.title}
      style={{ color: dark ? themeStyles.textPrimaryDark : themeStyles.textPrimaryLight }}
      >{t('links.contact')}</h1>
        <div className={styles.containerInput}>
          <Textfield
            label={t('labels.email') + '*'}
            id='email-input'
            Icon={MailOutlineIcon}
            width='100%'
            valueString={email}
            onChange={(value) => handleChange(constantsEntryInput.EMAIL, value)}
          />
        </div>
        <div className={styles.containerInput}>
          <Textfield
            label={t('labels.name') + '*'}
            id='name-input'
            width='100%'
            valueString={name}
            Icon={PersonIcon}
            onChange={(value) => handleChange(constantsEntryInput.NAME, value)}
          />
        </div>
        <div className={styles.containerInput}>
          <Textfield
            label={t('labels.company') + `(${t('labels.optional')})`}
            id='company-input'
            width='100%'
            valueString={company}
            Icon={BusinessIcon}
            onChange={(value) => handleChange(constantsEntryInput.COMPANY, value)}
          />
        </div>
        <div className={styles.containerInput}>
          <Textfield
            label={t('labels.message') + '*'}
            id='message-input'
            width='100%'
            Icon={CommentIcon}
            rows={7}
            valueString={message}
            multiline
            onChange={(value) => handleChange(constantsEntryInput.MESSAGE, value)}
            onKeyPress={(key) => handleKey(constantsEntryInput.MESSAGE, key)}
          />
          {limitedCharacter && (<p>Has superado el maximo de carateres</p>)}
          <p 
            style={{ 
              color: themeStyles.textPrimaryLight,
              backgroundColor: backColorCounter,
              fontSize: 14,
              fontWeight: 500,
              padding: 2
            }}
            className={styles.counter}>{`${characterCounter}/${limit}`}
          </p>
        </div>
        <div className={styles.containerBtn}>
          <ButtonDefault
            text={t('buttons.send')}
            Icon={SendIcon}
            onClick={() => handleSubmit()}
          />
        </div>
      </div>
    </div>
  )
}
export default Contact