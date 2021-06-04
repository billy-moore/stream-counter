import React, { useState } from 'react'

import { Button, createMuiTheme, Grid, Paper, ThemeProvider } from '@material-ui/core'
import { deepPurple, purple } from '@material-ui/core/colors'
import './App.css';

import BigNumber from './Components/MainSections/BigNumber'
import ButtonBar from './Components/MainSections/ButtonBar'
import DarkToggle from './Components/MainSections/DarkToggle'
import FontSelector from './Components/MainSections/FontSelector'
import SizeSelector from './Components/MainSections/SizeSelector'
import ColorPickDialog from './HOCs/ColorPickDialog'

import StopIcon from '@material-ui/icons/Stop';

function App() {
  const [state, setState] = useState(0)
  const [fontSizeState, setFontSizeState] = useState(100)
  const [fontStyle, setFontStyle] = useState('Dimitri-Swank')
  const [darkMode, setDarkMode] = useState(false)
  const [fontColor, setFontColor] = useState('')
  const [bkgroundColor, setBkGroundColor] = useState('')
  const [fontdialogOpen, setFontDialogOpen] = useState(false)
  const [bkgrounddialogOpen, setbkgroundDialogOpen] = useState(false)
  
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: deepPurple[500],
        // 
      },
      secondary: {
        main: purple[500],
        // 
      },
      type: darkMode ? 'dark' : 'light',
    },
  });


  const addHandler = () => {
    setState(state + 1)
  }

  const subHandler = () => {
    setState(state - 1)
  }

  const resetHandler = () => {
    setState(0)
  }

  const darkModeToggle = () => {
    setDarkMode(!darkMode)
    setFontColor('')
    setBkGroundColor('')
  }

  const changeFontHandler = (event) => {
    setFontStyle(event.target.value)
  }

  const valuetext = (value) => {
    return `${value}`
  }

  const setFontSizeHandler = (event, newValue) => {
    setFontSizeState(newValue)
  }

  const fontColorDialogToggle = () => {
    setFontDialogOpen(!fontdialogOpen)
  }

  const bkgroundColorDialogToggle = () => {
    setbkgroundDialogOpen(!bkgrounddialogOpen)
  }

  const setFontColorHandler = (color) => {
    setFontColor(color.hex)
  }

  const setbkgroundHandler = (color) => {
    setBkGroundColor(color.hex)
  }

  return (
    <ThemeProvider theme={theme}>
      <Paper className="App" >
        <Grid container spacing={4} className='mainGrid'>
          
          <Grid container item spacing={4}>
            
            <BigNumber 
              color={fontColor} 
              size={fontSizeState} 
              fontFam={fontStyle} 
              state={state}
              background={bkgroundColor}
              classes='bigNumber'
            />
            <ButtonBar 
              addClick={addHandler}
              subClick={subHandler}
              resetClick={resetHandler}
              state={state}
            />

          </Grid>

          <Grid container item spacing={3} className="StyleBar">
            <DarkToggle 
              mode={darkMode}
              clicked={darkModeToggle}
            />
            <FontSelector 
              font={ fontStyle }
              clicked={ changeFontHandler }
              default={ fontStyle }
            />

          <Grid container item spacing={3} className='numberSize'>
            
            <SizeSelector 
              aria={ valuetext }
              changed={ setFontSizeHandler }
            />
          </Grid>
          <Grid container item spacing={3} className='colorButtons'>
          <ColorPickDialog 
            open={ fontdialogOpen }
            color={ fontColor }
            changed={ setFontColorHandler }
            closed={ fontColorDialogToggle }
          />
          <ColorPickDialog 
            open={ bkgrounddialogOpen }
            color={ bkgroundColor }
            changed={ setbkgroundHandler }
            closed={ bkgroundColorDialogToggle }
          />
            <Grid item>
                <Button 
                    variant="contained"
                    key='font'
                    //color="primary"
                    startIcon={ <StopIcon style={{color: `${fontColor}`}}/> }
                    onClick={ fontColorDialogToggle }
                >Font Color</Button>
            </Grid>
            <Grid item>
                <Button 
                    variant="contained"
                    key='Background'
                    //color="secondary"
                    startIcon={ <StopIcon style={{color: `${bkgroundColor}`}}/> }
                    onClick={ bkgroundColorDialogToggle }
                    
                >BackGround Color</Button>
            </Grid>
          </Grid>
            </Grid>
      </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
