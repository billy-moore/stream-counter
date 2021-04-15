import React from 'react'

import { Modal, Fade} from '@material-ui/core'

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
                <div>
                    <h2 id="transition-modal-title">Transition modal</h2>
                    <p id="transition-modal-description">react-transition-group animates me.</p>
                </div>
            </Fade>
        </Modal>
    )
}
//className={classes.paper}
export default ColorModal
