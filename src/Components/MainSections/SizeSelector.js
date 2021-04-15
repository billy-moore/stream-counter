import React from 'react'

import { Grid, Slider } from '@material-ui/core'

const SizeSelector = ( props ) => {

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

    return (
        <Grid item xs={9} style={{paddingTop: '50px'}}>
            <Slider
                defaultValue={100}
                getAriaValueText={props.aria}
                aria-labelledby="discrete-slider-always"
                // step={25}
                marks={ marks }
                valueLabelDisplay="on"
                onChange={props.changed}
            />
        </Grid>
    )
}

export default SizeSelector
