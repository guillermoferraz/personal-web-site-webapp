/* eslint-disable @typescript-eslint/no-explicit-any */
import { themeStyles } from '../../styles/theme'
import Button from '@mui/material/Button'
import { makeStyles } from '@mui/styles'

interface PropTypes {
  text: string
  Icon?: any
  onClick? : () => void
  onKeyPress?: (key: string) => void
}

const ButtonDefault = ({ text, Icon, onClick, onKeyPress }: PropTypes) => {
  const classes = styles()
  return (
    <div 
      className={classes.container}
      >
      <Button 
        style={{
          color: themeStyles.textPrimaryLight,
          backgroundColor: themeStyles.hoverLigth,
        }}
        onClick={() => onClick ? onClick() : null}
        onKeyPress={(event) => onKeyPress ? onKeyPress(event.key) : null}
      >
      {text}
      {Icon && <Icon/>}
      </Button>
    </div>
  )
}
const styles = makeStyles ({
  container: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    '&>button':{
      width: '100%',
      fontWeight: 900,
      borderRadius: 10,
      '&>svg':{
        marginLeft: 10
      }
    }
  }
})
export default ButtonDefault