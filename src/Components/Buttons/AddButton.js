import React from 'react'
import {Button} from '@material-ui/core'
const AddButton = (props) => {
    return (
        <Button onClick={props.clicked} variant='contained' color='primary'>
            Add
        </Button>
    )
}

export default AddButton
