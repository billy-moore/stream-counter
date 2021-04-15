import React from 'react'
import { Grid } from '@material-ui/core'

import AddButton from '../Buttons/AddButton'
import SubtractButton from '../Buttons/SubtractButton'
import SubDisabledButton from '../Buttons/SubDisabledButton'
import ResetButton from '../Buttons/ResetButton'
import ResetDisabledButton from '../Buttons/ResetDisabledButton'

const ButtonBar = (props) => {
    return (
        <Grid container item spacing={3} className="ButtonBar">
            <Grid item>
                <AddButton clicked={props.addClick} />
            </Grid>
            <Grid item >
                { props.state > 0 ? 
                    <SubtractButton clicked={props.subClick} />  : 
                    <SubDisabledButton />
                }     
            </Grid>
            <Grid item>
                { props.state > 0 ?
                    <ResetButton clicked={props.resetClick}/> :
                    <ResetDisabledButton />
                }
            </Grid>
        </Grid>
    )
}

export default ButtonBar
