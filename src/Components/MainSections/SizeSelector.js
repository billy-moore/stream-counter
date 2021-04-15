import React from 'react'

import { Grid, Slider } from '@material-ui/core'

const SizeSelector = ( props ) => {
    return (
        <Grid item xs={9} style={{paddingTop: '50px'}}>
            <Slider
                defaultValue={100}
                getAriaValueText={props.aria}
                aria-labelledby="discrete-slider-always"
                // step={25}
                marks={ props.marks }
                valueLabelDisplay="on"
                onChange={props.changed}
            />
        </Grid>
    )
}

export default SizeSelector
