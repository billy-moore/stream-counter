import React from 'react'

import { Dialog } from '@material-ui/core'
import { SketchPicker } from 'react-color'

const ColorPickDialog = ( props ) => {
    return (
        <Dialog
        //fullWidth={fullWidth}
        //maxWidth={maxWidth}
        open={props.open}
        onClose={props.closed}
        aria-labelledby="max-width-dialog-title"
        >
            <SketchPicker color={props.color} onChange={props.changed}/>
        </Dialog>
    )
}

export default ColorPickDialog
