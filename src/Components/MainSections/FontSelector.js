import React from 'react'

import { FormControl, Grid, InputLabel, MenuItem, Select} from '@material-ui/core'

const FontSelector = ( props ) => {
    return (
        <Grid item xs={6}>
            <FormControl variant='filled' >
                <InputLabel id='changeFont'>
                    Change Font
                </InputLabel>
                <Select
                    labelId='changeFont'
                    id='font'
                    value={ props.font}
                    onChange={ props.clicked }
                    >
                        <MenuItem value={'DimitriSwank'}>Dimitri Swank</MenuItem>
                        <MenuItem value={'Roboto'}>Roboto</MenuItem>
                        <MenuItem value={'ZenDots'}>Zen Dots</MenuItem>
                        <MenuItem value={'Arvo'} > - Arvo - </MenuItem>
                        <MenuItem value={'Arial'}>Arial Black</MenuItem>
                </Select>
            </FormControl>
        </Grid>
    )
}

export default FontSelector
