import React from 'react';
import { useStyles } from './ModalPopUpStyles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

interface ModalPopUpProps {
    modelPopUp: boolean;
    onModelPopUpToggle: (state: boolean) => void;
    title: string;
    content: any;
}

const ModalPopUp: React.FC<ModalPopUpProps> = ({  onModelPopUpToggle, modelPopUp, title, content }) => {
    const classes = useStyles();

    const handleClose = () => {
        onModelPopUpToggle(false);
    };

    return (
        <Dialog className={classes.modal_root} open={modelPopUp} onClose={handleClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent dividers>
                {content}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} className={classes.cancel_btn}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ModalPopUp;
