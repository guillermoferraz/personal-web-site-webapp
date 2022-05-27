import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from '../../hooks'

/* Store */
import { RootState, AppDispatch } from '../../store'
import mailerSlice, { postMailer } from '../../store/mailer'

/* Components */
import Textfield from '../../components/Textfield'
import ButtonDefault from '../../components/ButtonDefault'
import SucessSubmitModal from '../../components/SucessSubmitModal'
import ParticlesBackground from '../../components/Particles'
import BackWall from '../../components/BackWall'

/* Styles */
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PersonIcon from '@mui/icons-material/Person'
import BusinessIcon from '@mui/icons-material/Business'
import CommentIcon from '@mui/icons-material/Comment'
import SendIcon from '@mui/icons-material/Send'
import ErrorIcon from '@mui/icons-material/Error'
import { themeStyles } from '../../styles/theme'
import styles from './contact.module.scss'

/* Configs / constanst */
import { constantsEntryInput, constantsTypes } from '../../constants/constants'
import { checkEmail } from '../../constants/ExpReg'
import { changeLanguage } from '../../config/changeLanguage'
import '../../i18n/i18n'

const Contact: NextPage = () => {
  const { t } = useTranslation()
  const dispatch: AppDispatch = useAppDispatch()
  const { dark } = useSelector((state: RootState) => state.themeState)
  const { responsePostMailer } = useSelector(
    (state: RootState) => state.mailerState
  )
  const { setCleanResponseMailer } = mailerSlice.actions

  const [email, setEmail] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [company, setCompany] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [characterCounter, setCharacterCounter] = useState<number>(0)
  const [limitedCharacter, setLimitedCharacter] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<boolean>(false)
  const [nameError, setNameError] = useState<boolean>(false)
  const [messageError, setMessageError] = useState<boolean>(false)
  const [showErrors, setShowErrors] = useState<boolean>(false)
  const [successSubmit, setSuccessSubmit] = useState<boolean>(false)
  const limit = 285
  const minName = 2

  const handleChange = (entry: string, event: string) => {
    if (entry) {
      switch (entry) {
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
    if ((key && key === 'Delete') || (key && key === 'Backspace')) {
      switch (entry) {
        case constantsEntryInput.MESSAGE:
          limitedCharacter &&
            message &&
            message.length > 2 &&
            setMessage(message.slice(0, message.length - 1))
          break
        default:
      }
    }
  }

  useEffect(() => {
    if (
      (name && name.length < minName) ||
      name.includes('0') ||
      name.includes('1') ||
      name.includes('2') ||
      name.includes('3') ||
      name.includes('4') ||
      name.includes('5') ||
      name.includes('6') ||
      name.includes('7') ||
      name.includes('8') ||
      name.includes('9')
    ) {
      setNameError(true)
    } else {
      setNameError(false)
    }
  }, [name])

  useEffect(() => {
    if (message && message.length < minName) {
      setMessageError(true)
    } else {
      setMessageError(false)
    }
  }, [message])

  useEffect(() => {
    if (message) {
      setCharacterCounter(message.length)
    } else {
      setCharacterCounter(0)
    }
  }, [message])

  useEffect(() => {
    const messageDiv = document.getElementById(
      'message-container'
    ) as HTMLDivElement
    if (characterCounter && characterCounter > limit) {
      setLimitedCharacter(true)
      messageDiv && messageDiv.setAttribute('style', 'border: 1px solid red;')
    } else {
      setLimitedCharacter(false)
      messageDiv && messageDiv.setAttribute('style', 'border: none;')
    }
  }, [characterCounter])

  useEffect(() => {
    if (!email.match(checkEmail())) {
      setEmailError(true)
    } else {
      setEmailError(false)
      const emailDiv = document.getElementById(
        'email-container'
      ) as HTMLDivElement
      emailDiv.setAttribute('style', 'border: none;')
    }
  }, [email])

  const backColorCounter: string =
    characterCounter > 150 && characterCounter < 230
      ? '#FFC533'
      : characterCounter >= 230
      ? '#EC1414'
      : themeStyles.hoverLigth

  const RenderErrorStyles = (type: string, entry: string) => {
    const emailDiv = document.getElementById(
      'email-container'
    ) as HTMLDivElement
    const nameDiv = document.getElementById('name-container') as HTMLDivElement
    const messageDiv = document.getElementById(
      'message-container'
    ) as HTMLDivElement
    const cleanAll = () => {
      emailDiv.setAttribute('style', 'border: none;')
      nameDiv.setAttribute('style', 'border: none;')
      messageDiv.setAttribute('style', 'border: none;')
    }
    switch (type) {
      case constantsTypes.ALERT:
        switch (entry) {
          case constantsEntryInput.EMAIL:
            emailDiv.setAttribute('style', 'border: 1px solid red;')
            break
          case constantsEntryInput.MESSAGE:
            messageDiv.setAttribute('style', 'border: 1px solid red;')
            break
          case constantsEntryInput.NAME:
            nameDiv.setAttribute('style', 'border: 1px solid red;')
            break
          default:
        }
      case constantsTypes.CLEAN:
        return cleanAll()
      default:
    }
  }

  const handleSubmit = () => {
    if (emailError || limitedCharacter || nameError || messageError) {
      setShowErrors(true)
      const error = emailError
        ? constantsEntryInput.EMAIL
        : limitedCharacter || messageError
        ? constantsEntryInput.MESSAGE
        : nameError && constantsEntryInput.NAME
      RenderErrorStyles(constantsTypes.ALERT, error ? error : '')
    } else {
      if (name && email && message) {
        setShowErrors(false)
        RenderErrorStyles(constantsTypes.CLEAN, '')
        setSuccessSubmit(true)
        dispatch(
          postMailer({
            email: email,
            name: name,
            company: company,
            message: message,
            lng: `${changeLanguage()}`,
          })
        )
      }
      !message ? setMessageError(true) : setMessageError(false)
      !name ? setNameError(true) : setNameError(false)
      !email ? setEmailError(true) : setEmailError(false)
    }
  }

  const cleanResponseMailer = () => {
    setName('')
    setEmail('')
    setCompany('')
    setMessage('')
    setCharacterCounter(0)
    setLimitedCharacter(false)
    ;(document.getElementById('email-input') as HTMLInputElement).value = ''
    ;(document.getElementById('name-input') as HTMLInputElement).value = ''
    ;(document.getElementById('company-input') as HTMLInputElement).value = ''
    ;(document.getElementById('message-input') as HTMLInputElement).value = ''

    dispatch(setCleanResponseMailer())
    setSuccessSubmit(false)
  }

  /* useEffect(() => {
    if (responsePostMailer && responsePostMailer.response === 'SUCCESS') {
      setTimeout(cleanResponseMailer, 5500)
    }
  }, [responsePostMailer])
   */

  return (
    <React.Fragment>
      <BackWall />
      {successSubmit && (
        <SucessSubmitModal
          data={{
            name: name,
            email: email,
            company: company,
          }}
          open={successSubmit}
          setOpen={cleanResponseMailer}
        />
      )}
      <div
        style={{
          backgroundColor: dark
            ? themeStyles.cardBackgroundDark
            : themeStyles.backgroundLight,
        }}
        className={styles.container}
      >
        <div className={styles.containerForm}>
          <h1
            className={styles.title}
            style={{
              color: dark
                ? themeStyles.textPrimaryDark
                : themeStyles.textPrimaryLight,
            }}
          >
            {t('links.contact')}
          </h1>
          <div className={styles.containerInput} id="email-container">
            <Textfield
              label={t('labels.email') + '*'}
              id="email-input"
              Icon={MailOutlineIcon}
              width="100%"
              valueString={email}
              onChange={(value) =>
                handleChange(constantsEntryInput.EMAIL, value)
              }
            />
          </div>
          {showErrors && emailError && (
            <p className={styles.error}>
              <span>
                <ErrorIcon />
              </span>
              {t('errors.email')}
            </p>
          )}
          <div className={styles.containerInput} id="name-container">
            <Textfield
              label={t('labels.name') + '*'}
              id="name-input"
              width="100%"
              valueString={name}
              Icon={PersonIcon}
              onChange={(value) =>
                handleChange(constantsEntryInput.NAME, value)
              }
            />
          </div>
          {showErrors && nameError && (
            <p className={styles.error}>
              <span>
                <ErrorIcon />
              </span>
              {t('errors.name')}
            </p>
          )}
          <div className={styles.containerInput}>
            <Textfield
              label={t('labels.company') + `(${t('labels.optional')})`}
              id="company-input"
              width="100%"
              valueString={company}
              Icon={BusinessIcon}
              onChange={(value) =>
                handleChange(constantsEntryInput.COMPANY, value)
              }
            />
          </div>
          <div className={styles.containerInput} id="message-container">
            <Textfield
              label={t('labels.message') + '*'}
              id="message-input"
              width="100%"
              Icon={CommentIcon}
              rows={7}
              valueString={message}
              multiline
              onChange={(value) =>
                handleChange(constantsEntryInput.MESSAGE, value)
              }
              onKeyPress={(key) => handleKey(constantsEntryInput.MESSAGE, key)}
            />
          </div>

          {limitedCharacter && (
            <p className={styles.error}>
              <span>
                <ErrorIcon />
              </span>
              {t('errors.maxMessage')}
            </p>
          )}
          {messageError && (
            <p className={styles.error}>
              <span>
                <ErrorIcon />
              </span>
              {t('errors.entryMessage')}
            </p>
          )}

          <p
            style={{
              color: themeStyles.textPrimaryLight,
              backgroundColor: backColorCounter,
              fontSize: 14,
              fontWeight: 500,
              padding: 2,
            }}
            className={styles.counter}
          >
            {`${characterCounter}/${limit}`}
          </p>

          <div className={styles.containerBtn}>
            <ButtonDefault
              text={t('buttons.send')}
              Icon={SendIcon}
              onClick={() => handleSubmit()}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Contact
