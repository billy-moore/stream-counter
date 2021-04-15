import React from 'react'

import { Grid, Switch } from '@material-ui/core'

const DarkToggle = (props) => {
    return (
        <Grid item>
            <Switch checked={props.mode} onChange={props.clicked}/>
            <br />
            {props.mode ? 'Dark Mode' : 'Light Mode'}
        </Grid>
    )
}

export default DarkToggle
