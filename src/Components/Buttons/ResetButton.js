import React from 'react'
import {Button} from '@material-ui/core'

const ResetButton = (props) => {
    return (
        <Button onClick={props.clicked}  variant='contained' color='default'> 
            Reset
        </Button>
    )
}

export default ResetButton
