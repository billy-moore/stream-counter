import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import './App.css';
import { createMuiTheme, Grid, MenuItem, FormControl, InputLabel, Paper, Select, Switch, ThemeProvider } from '@material-ui/core'
import Number from './Components/Number'
import AddButton from './Components/Buttons/AddButton'
import SubtractButton from './Components/Buttons/SubtractButton'
import SubDisabledButton from './Components/Buttons/SubDisabledButton'
import ResetButton from './Components/Buttons/ResetButton'
import ResetDisabledButton from './Components/Buttons/ResetDisabledButton'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    }
}));

function App() {
  const [state, setState] = useState(0)
  const [fontStyle, setFontStyle] = useState('DimitriSwank')
  const [darkMode, setDarkMode] = useState(false)
  const classes = useStyles()
  
  const theme = createMuiTheme({
    palette: {
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

  const changeFontHandler = (event) => {
    setFontStyle(event.target.value)
    console.log(event.target.value)
  }

  const darkModeToggle = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeProvider theme={theme}>
      <Paper className="App" >
      <Grid container spacing={4}>
        <Grid item xs={12} className={fontStyle} style={{height: '200px'}}>
          <Number number={state} />
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
                <FormControl className={classes.formControl}>
                  <InputLabel id='changeFont'>
                      Change Font
                  </InputLabel>
                  <Select
                      labelId='changeFont'
                      id='font'
                      value={fontStyle}
                      onChange={changeFontHandler}
                      >
                      <MenuItem value={'Roboto'}>Roboto</MenuItem>
                      <MenuItem value={'DimitriSwank'}>Dimitri Swank</MenuItem>
                      <MenuItem value={'ZenDots'}>Zen Dots</MenuItem>
                      </Select>
                </FormControl>
            </Grid>
            <Grid item>
            <Switch checked={darkMode} onChange={darkModeToggle}/>
                {darkMode ? 'Dark Mode' : 'Light Mode'}
            </Grid>
        </Grid>
      </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
