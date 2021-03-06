import React from 'react'

import { Grid, Switch, Tooltip } from '@material-ui/core'

const DarkToggle = (props) => {
    return (
        <Grid item>
            <Tooltip title='Resets Custom Colors' placement='bottom'>
            <Switch checked={props.mode} onChange={props.clicked}/>
            </Tooltip>
            <br />
            {props.mode ? 'Dark Mode' : 'Light Mode'}
            
        </Grid>
    )
}

export default DarkToggle
