import React from 'react'

import { Modal, Fade} from '@material-ui/core'

import ColorPickerMod from './ColorPickerMod'

const ColorModal = ( props ) => {
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            // className={classes.modal}
            open={props.modOpen}
            onClose={props.clicked}
            closeAfterTransition
            BackdropComponent={props.backComp}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={props.modOpen}>
                <ColorPickerMod />
            </Fade>
        </Modal>
    )
}
//className={classes.paper}
export default ColorModal
