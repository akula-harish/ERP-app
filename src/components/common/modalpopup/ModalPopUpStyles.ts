import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
    createStyles({
        modal_root: {
            position: 'relative',
            '& .MuiPaper-root': {
                width: '75%',
            },
        },
        logo_content: {
            textAlign: 'center',
            '& img': {
                width: '20%',
            },
        },
        cancel_btn: {
            color: '#fff!important',
            border: '1px solid green!important',
            backgroundColor: 'green!important',
            '& .MuiTouchRipple-root': {
                
            },
        },
    })
);
