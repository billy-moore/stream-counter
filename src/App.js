import React, { useState } from 'react'

import { createMuiTheme, Grid, MenuItem, FormControl, InputLabel, Paper, Select, Switch, ThemeProvider } from '@material-ui/core'
import { deepPurple, purple } from '@material-ui/core/colors'
import './App.css';

import AddButton from './Components/Buttons/AddButton'
import SubtractButton from './Components/Buttons/SubtractButton'
import SubDisabledButton from './Components/Buttons/SubDisabledButton'
import ResetButton from './Components/Buttons/ResetButton'
import ResetDisabledButton from './Components/Buttons/ResetDisabledButton'
import { TwitterPicker } from 'react-color'

function App() {
  const [state, setState] = useState(0)
  const [fontStyle, setFontStyle] = useState('DimitriSwank')
  const [darkMode, setDarkMode] = useState(false)
  const [fontColor, setFontColor] = useState({color: ''})
  
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: deepPurple[500],
      },
      secondary: {
        main: purple[500],
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
    setFontColor({color: ''})
  }

  const changeFontHandler = (event) => {
    setFontStyle(event.target.value)
  }

  const setColorHandler = (color) => {
    setFontColor({color: color.hex})
  }

  return (
    <ThemeProvider theme={theme}>
      <Paper className="App" >
      <Grid container spacing={4} className='mainGrid'>
        <Grid item xs={12} className={fontStyle} style={{height: '200px'}}>
          <span style={fontColor}>
            {state}
          </span>
          
        </Grid>
        <Grid container item spacing={3} className="ButtonBar">
          <Grid item>
            <AddButton clicked={addHandler} />
          </Grid>
          <Grid item >
            {state > 0 ? 
              <SubtractButton clicked={subHandler} />  : 
              <SubDisabledButton />
              }     
          </Grid>
          <Grid item>
            { state > 0 ?
            <ResetButton clicked={resetHandler}/> :
            <ResetDisabledButton />
            }
            </Grid>
        </Grid>
        <Grid container item spacing={3} className="StyleBar">
            <Grid item>
              <Switch checked={darkMode} onChange={darkModeToggle}/>
              <br />
                  {darkMode ? 'Dark Mode' : 'Light Mode'}
            </Grid>
            <Grid item xs={4}>
                <FormControl variant='filled'>
                  <InputLabel id='changeFont'>
                      Change Font
                  </InputLabel>
                  <Select
                      labelId='changeFont'
                      id='font'
                      value={fontStyle}
                      onChange={changeFontHandler}
                      >
                      <MenuItem value={'DimitriSwank'}>Dimitri Swank</MenuItem>
                      <MenuItem value={'Roboto'}>Roboto</MenuItem>
                      <MenuItem value={'ZenDots'}>Zen Dots</MenuItem>
                      </Select>
                </FormControl>
            </Grid>
            <Grid item>
              <TwitterPicker color={fontColor} onChange={setColorHandler}/>
            </Grid>
        </Grid>
      </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
