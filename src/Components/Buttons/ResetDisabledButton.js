import React from 'react'
import {Button} from '@material-ui/core'

const ResetButton = (props) => {
    return (
        <Button onClick={props.clicked}  variant='contained' color='default' disabled> 
            Reset
        </Button>
    )
}

export default ResetButton