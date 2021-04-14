import React from 'react'
import {Button} from '@material-ui/core'

const SubtractButton = (props) => {
    return (
        <Button onClick={props.clicked} variant='contained' color='secondary'>
            Subtract
        </Button>
    )
}

export default SubtractButton
