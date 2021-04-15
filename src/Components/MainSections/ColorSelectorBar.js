import React from 'react'

import { Button, Grid, } from '@material-ui/core'

import ColorPickDialog from '../../HOCs/ColorPickDialog'


import StopIcon from '@material-ui/icons/Stop';
 
const ColorSelectorBar = ( props ) => {
    return (
        <Grid container item spacing={3}>
            <Grid item>
                <Button 
                    variant="contained"
                    //color="primary"
                    startIcon={ <StopIcon /> }
                    onClick={ props.fontChange }
                >Font Color</Button>
            </Grid>
            <Grid item>
                <Button 
                    variant="contained"
                    //color="secondary"
                    startIcon={ <StopIcon /> }
                    onClick={ props.bkgroundChange }
                >BackGround Color</Button>
            </Grid>
        </Grid>
    )
}


export default ColorSelectorBar
