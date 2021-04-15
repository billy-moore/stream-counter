import React from 'react'
import {Grid} from '@material-ui/core'
const BigNumber = (props) => {
    return (
        <Grid item xs={12} className='numberSection' >
            <span style={{color: `${props.color}`, fontSize: (props.size +'px'), fontFamily: `${props.fontFam}`}} >
                {props.state}
            </span>
        </Grid>
    )
}

export default BigNumber
