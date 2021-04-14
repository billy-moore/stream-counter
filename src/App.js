import React, { useState } from 'react'

import './App.css';

import { Grid } from '@material-ui/core'
import Number from './Components/Number'
import AddButton from './Components/Buttons/AddButton'
import SubtractButton from './Components/Buttons/SubtractButton'
import SubDisabledButton from './Components/Buttons/SubDisabledButton'
import ResetButton from './Components/Buttons/ResetButton'
import ResetDisabledButton from './Components/Buttons/ResetDisabledButton'

function App() {
  const [state, setState] = useState(0)

  const addHandler = () => {
    setState(state + 1)
  }

  const subHandler = () => {
    setState(state - 1)
  }

  const resetHandler = () => {
    setState(0)
  }

  return (
    <Grid className="App" container>
      <Grid item xs={12} className="BigNum">
        <Number number={state}/>
      </Grid>
      <Grid container spacing={3} className="ButtonBar">
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
  );
}

export default App;
