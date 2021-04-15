import React from 'react'

import { Button, Grid, } from '@material-ui/core'

 
const ColorSelectorBar = ( props ) => {
    return (
        <Grid container item spacing={3}>
            <Grid item>
                <Button 
                    variant="contained"
                    key='font'
                    //color="primary"
                    startIcon={ <StopIcon /> }
                    onClick={ props.fontChange }
                >Font Color</Button>
            </Grid>
            <Grid item>
                <Button 
                    variant="contained"
                    key='Background'
                    //color="secondary"
                    startIcon={ <StopIcon /> }
                    onClick={ props.bkgroundChange }

                >BackGround Color</Button>
            </Grid>
        </Grid>
    )
}


export default ColorSelectorBar
