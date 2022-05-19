import { useEffect, useState } from 'react';
import MatrixEffect from '../MatrixEffect'
import styles from './banner.module.scss'

const Banner = () => {
  const [text, setText] = useState('GUILLERMO FERRAZ')
  const [comment, setComment] = useState<string>('FullStack Developer')
  const initialTime = 100;
  const addExtraTime = 100

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
    setTimeout(() => setText(randomText(30)), initialTime)
    setTimeout(() => setText(randomText(25)), initialTime + addExtraTime)
    setTimeout(() => setText(randomText(20)), initialTime + addExtraTime *3)
    setTimeout(() => setText(randomText(35)), initialTime + addExtraTime *4)
    setTimeout(() => setText(randomText(40)), initialTime + addExtraTime *5)
    setTimeout(() => setText(randomText(20)), initialTime + addExtraTime *6)
    setTimeout(() => setText(randomText(30)), initialTime + addExtraTime *7)
    setTimeout(() => setText(randomText(35)), initialTime + addExtraTime *8)
    setTimeout(() => setText(randomText(20)), initialTime + addExtraTime *9)
    setTimeout(() => setText(randomText(30)), initialTime + addExtraTime *10)
    setTimeout(() => setText(randomText(25)), initialTime + addExtraTime *11)
    setTimeout(() => setText(randomText(20)), initialTime + addExtraTime *12)
    setTimeout(() => setText(randomText(35)), initialTime + addExtraTime *13)
    setTimeout(() => setText(randomText(40)), initialTime + addExtraTime *14)
    setTimeout(() => setText(randomText(20)), initialTime + addExtraTime *15)
    setTimeout(() => setText(randomText(30)), initialTime + addExtraTime *16)
    setTimeout(() => setText(randomText(35)), initialTime + addExtraTime *17)
    setTimeout(() => setText(randomText(20)), initialTime + addExtraTime *18)
    setTimeout(() => setText(randomText(20)), initialTime + addExtraTime *20)
    setTimeout(() => setText(randomText(20)), initialTime + addExtraTime *22)
    setTimeout(() => setText(randomText(20)), initialTime + addExtraTime *24)
    setTimeout(() => setText(randomText(20)), initialTime + addExtraTime *26)
    setTimeout(() => setText(randomText(20)), initialTime + addExtraTime *28)
    setTimeout(() => setText(randomText(20)), initialTime + addExtraTime *30)
    setTimeout(() => setText(randomText(20)), initialTime + addExtraTime *32)
    setTimeout(() => setText(randomText(20)), initialTime + addExtraTime *34)
    setTimeout(() => setText(randomText(20)), initialTime + addExtraTime *36)
    setTimeout(() => setText(randomText(20)), initialTime + addExtraTime *38)
    setTimeout(() => setText(randomText(20)), initialTime + addExtraTime *40)
    setTimeout(() => setText(randomText(20)), initialTime + addExtraTime *42)
    setTimeout(() => setText(randomText(20)), initialTime + addExtraTime *44)
    setTimeout(() => setText(randomText(20)), initialTime + addExtraTime *46)
    setTimeout(() => setText(randomText(20)), initialTime + addExtraTime *48)
    setTimeout(() => setText(randomText(20)), initialTime + addExtraTime *50)
    setTimeout(() => setText(randomText(20)), initialTime + addExtraTime *52)
    setTimeout(() => setText('GUILLEMO FERRAZ'), initialTime + addExtraTime *54)
    setTimeout(() => setComment('PHP'), initialTime + addExtraTime *3)
    setTimeout(() => setComment('Docker'), initialTime + addExtraTime *6)
    setTimeout(() => setComment('JavaScript'), initialTime + addExtraTime *9)
    setTimeout(() => setComment('React'), initialTime + addExtraTime *12)
    setTimeout(() => setComment('React-Native'), initialTime + addExtraTime *15)
    setTimeout(() => setComment('Linux'), initialTime + addExtraTime *18)
    setTimeout(() => setComment('NextJs'), initialTime + addExtraTime *21)
    setTimeout(() => setComment('NodeJs'), initialTime + addExtraTime *24)
    setTimeout(() => setComment('TypeScript'), initialTime + addExtraTime *27)
    setTimeout(() => setComment('Electron'), initialTime + addExtraTime *30)
    setTimeout(() => setComment('Expo'), initialTime + addExtraTime *33)
    setTimeout(() => setComment('Bash'), initialTime + addExtraTime *36)
    setTimeout(() => setComment('Pentesting'), initialTime + addExtraTime *39)
    setTimeout(() => setComment('JavaScript'), initialTime + addExtraTime *42)
    setTimeout(() => setComment('Docker'), initialTime + addExtraTime *45)
    setTimeout(() => setComment('TypeScript'), initialTime + addExtraTime *48)
    setTimeout(() => setComment('Ethical Hacking'), initialTime + addExtraTime *51)
    setTimeout(() => setComment('FullStack Developer'), initialTime + addExtraTime *54)
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
    <>
    <div className={styles.containerMatrix}>
      <MatrixEffect/> 
    </div>
    <div className={styles.container} onMouseEnter={() => handleEntryMouse()} onMouseLeave={() => handleLeaveMouse()}>
      <div className={styles.subContainer}>
        <p className={styles.text}>{returnText()}</p>
        <p className={styles.text}>{comment}</p>
      </div>
    </div>
    </>
  )
}
export default Banner