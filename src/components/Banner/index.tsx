import { useEffect, useState } from 'react';
import styles from './banner.module.scss'

const Banner = () => {
  const [text, setText] = useState('GUILLERMO FERRAZ')
  const [comment, setComment] = useState<string>('FullStack Developer')

  const randomText = (length: number) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+:"{?><';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }


  const handleEntryMouse = () => {
    console.log("entry Mouse")
    setText(randomText(25))
    setTimeout(() => setText(randomText(30)), 100)
    setTimeout(() => setText(randomText(25)), 200)
    setTimeout(() => setText(randomText(20)), 300)
    setTimeout(() => setText(randomText(35)), 400)
    setTimeout(() => setText(randomText(40)), 500)
    setTimeout(() => setText(randomText(20)), 600)
    setTimeout(() => setText(randomText(30)), 700)
    setTimeout(() => setText(randomText(35)), 800)
    setTimeout(() => setText(randomText(20)), 900)
    setTimeout(() => setText(randomText(30)), 1000)
    setTimeout(() => setText(randomText(25)), 1100)
    setTimeout(() => setText(randomText(20)), 1200)
    setTimeout(() => setText(randomText(35)), 1300)
    setTimeout(() => setText(randomText(40)), 1400)
    setTimeout(() => setText(randomText(20)), 1500)
    setTimeout(() => setText(randomText(30)), 1600)
    setTimeout(() => setText(randomText(35)), 1700)
    setTimeout(() => setText(randomText(20)), 1800)
    setTimeout(() => setText(randomText(20)), 2000)
    setTimeout(() => setText(randomText(20)), 2200)
    setTimeout(() => setText(randomText(20)), 2400)
    setTimeout(() => setText(randomText(20)), 2600)
    setTimeout(() => setText(randomText(20)), 2800)
    setTimeout(() => setText(randomText(20)), 3000)
    setTimeout(() => setText(randomText(20)), 3200)
    setTimeout(() => setText(randomText(20)), 3400)
    setTimeout(() => setText(randomText(20)), 3600)
    setTimeout(() => setText(randomText(20)), 3800)
    setTimeout(() => setText(randomText(20)), 4000)
    setTimeout(() => setText(randomText(20)), 4200)
    setTimeout(() => setText(randomText(20)), 4400)
    setTimeout(() => setText(randomText(20)), 4600)
    setTimeout(() => setText(randomText(20)), 4800)
    setTimeout(() => setText(randomText(20)), 5000)
    setTimeout(() => setText(randomText(20)), 5200)
    setTimeout(() => setText('GUILLEMO FERRAZ'), 5400)
    setTimeout(() => setComment('PHP'), 300)
    setTimeout(() => setComment('Docker'), 600)
    setTimeout(() => setComment('JavaScript'), 900)
    setTimeout(() => setComment('React'), 1200)
    setTimeout(() => setComment('React-Native'), 1500)
    setTimeout(() => setComment('Linux'), 1800)
    setTimeout(() => setComment('NextJs'), 2100)
    setTimeout(() => setComment('NodeJs'), 2400)
    setTimeout(() => setComment('TypeScript'), 2700)
    setTimeout(() => setComment('Electron'), 3000)
    setTimeout(() => setComment('Expo'), 3300)
    setTimeout(() => setComment('Bash'), 3600)
    setTimeout(() => setComment('Pentesting'), 3900)
    setTimeout(() => setComment('JavaScript'), 4200)
    setTimeout(() => setComment('Docker'), 4500)
    setTimeout(() => setComment('TypeScript'), 4800)
    setTimeout(() => setComment('Ethical Hacking'), 5100)
    setTimeout(() => setComment('FullStack Developer'), 5400)
  }
  const handleLeaveMouse = () => {
    console.log("Leave Mouse")
  }

  const returnText = () => {
    return (
      <p className={styles.text}>
        {text}
      </p>
    )
  }

  return (
    <div className={styles.container} onMouseEnter={() => handleEntryMouse()} onMouseLeave={() => handleLeaveMouse()}>
      <div className={styles.subContainer}>
        <p className={styles.text}>{returnText()}</p>
        <p className={styles.text}>{comment}</p>
      </div>
    </div>
  )
}
export default Banner