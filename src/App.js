import React, { useState } from 'react'

import { createMuiTheme, Grid, MenuItem, FormControl, InputLabel, Paper, Select, Slider, Switch, ThemeProvider } from '@material-ui/core'
import { deepPurple, purple } from '@material-ui/core/colors'
import './App.css';

import AddButton from './Components/Buttons/AddButton'
import SubtractButton from './Components/Buttons/SubtractButton'
import SubDisabledButton from './Components/Buttons/SubDisabledButton'
import ResetButton from './Components/Buttons/ResetButton'
import ResetDisabledButton from './Components/Buttons/ResetDisabledButton'
import { SketchPicker } from 'react-color'

function App() {
  const [state, setState] = useState(0)
  const [fontSizeState, setFontSizeState] = useState(100)
  const [fontStyle, setFontStyle] = useState('DimitriSwank')
  const [darkMode, setDarkMode] = useState(false)
  const [fontColor, setFontColor] = useState('#000000')
  
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

  const marks = [
    {
      value: 0,
      label: '0px',
    },
    { 
      value: 50,
      label: '50px'
    },
    {
      value: 100,
      label: '100px',
    },
  ];

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
    setFontColor('#0000000')
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

  const setColorHandler = (color) => {
    console.log(color.hex)
    setFontColor(color.hex)
  }

  return (
    <ThemeProvider theme={theme}>
      <Paper className="App" >
      <Grid container spacing={4} className='mainGrid'>
        <Grid container item spacing={4} className='topSection'>
          <Grid item xs={12} className='numberSection' >
            <span style={{color: `${fontColor}`, fontSize: (fontSizeState +'px'), fontFamily: `${fontStyle}`}} >
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
        </Grid>
        <Grid container item spacing={3} className="StyleBar">
            <Grid item>
              <Switch checked={darkMode} onChange={darkModeToggle}/>
              <br />
                  {darkMode ? 'Dark Mode' : 'Light Mode'}
            </Grid>
            <Grid item xs={6}>
                <FormControl variant='filled' >
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
                      <MenuItem value={'Arvo'} > - Arvo - </MenuItem>
                      <MenuItem value={'Arial'}>Arial Black</MenuItem>
                      
                      </Select>
                </FormControl>
            </Grid>
            <Grid item xs={9} style={{paddingTop: '50px'}}>
              <Slider
                  defaultValue={100}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider-always"
                  // step={25}
                  marks={marks}
                  valueLabelDisplay="on"
                  onChange={setFontSizeHandler}
                />
            </Grid>
            <Grid item xs={6}>
              <SketchPicker color={fontColor} onChange={setColorHandler}/>
            </Grid>
            <Grid item xs={6}>
              <SketchPicker color={fontColor} onChange={setColorHandler}/>
            </Grid>
            </Grid>
      </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
