/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
/* Styles */
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { makeStyles } from '@mui/styles'
import { themeStyles } from '../../styles/theme'


interface PropsTypes {
  label: string
  id: string
  onChange?: (event: string) => void
  Icon?: any
  multiline?: boolean
  rows?: number
  valueString?: string
  valueNumber?: number
  onKeyPress?: (event: string) => void
  width: string
}

const Textfield = ({
  label,
  id,
  onChange,
  Icon,
  multiline,
  rows,
  valueString,
  valueNumber,
  onKeyPress,
  width,
}: PropsTypes) => {

  const [color, setColor] = useState<boolean>(false)
  const classes = styles({ width: width || '100%', color: color})
  const { dark } = useSelector((state: RootState) => state.themeState)

  useEffect(() => {
    if(dark) {
      setColor(true)
    } else {
      setColor(false)
    }

  },[dark])

  useEffect(() => {
    const labelElements = id && (document.getElementsByTagName('label') as any);
    if(labelElements && labelElements.length > 0){
      for(let i = 0; i < labelElements.length; i++){
        labelElements[i].setAttribute("style", `color:${dark ? themeStyles.textPrimaryDark : themeStyles.textPrimaryLight};`);
      }
    }

    const inputElement = id && (document.getElementById(id) as HTMLInputElement);
    inputElement && inputElement.setAttribute("style", `color:${dark ? themeStyles.textPrimaryDark : themeStyles.textPrimaryLight};`);
  },[dark, id])

  return (
    <div 
      className={classes.container}
      style={{ backgroundColor: dark ? themeStyles.backgroundDark : themeStyles.backgroundLight}}
      >
      <TextField 
        id={id}
        label={label}
        variant="filled"
        onChange={(event) => onChange ? onChange(event.target.value) : null}
        multiline={multiline}
        rows={rows}
        value={valueString || valueNumber || null}
        onKeyDown={(event) => onKeyPress ? onKeyPress(event.key) : null}
        InputProps={Icon && {
           endAdornment: 
            <InputAdornment 
              position='start'>
                {
                  <Icon
                  style={{ color: dark ? themeStyles.textPrimaryDark : themeStyles.textPrimaryLight }}
                />
                }                
            </InputAdornment>,
        }}
      />
    </div>   
  )
}
const styles = makeStyles({
container: {
  '&>div':{
    width: '100%',
    '&>div':{
      width: '100%',
      '&>div>svg':{
        marginTop: -15,
        width: 25,
        height: 25,
        }
      }
    }
  }
})
export default Textfield