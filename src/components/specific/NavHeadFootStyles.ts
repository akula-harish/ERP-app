import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    nav_root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #ccc',
      padding: '10px 0px',
    },
    logo: { 
        border: '1px solid #ccc',
        borderRadius: '50%',
        height: '50px',
        width: '50px',
        position: 'relative',
    },
    logo_none: {
        display: 'none',
    },
    logo_img: {
        width: '40px',
        borderRadius: '50%',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    },
    logo_preview: {
      width: '20%',
    },
    submit_btn: {
      bottom: '8px',
      right: '90px',
      color: '#fff!important',
      border: '1px solid green!important',
      backgroundColor: 'green!important',
    },
    expand_icon: {
      cursor: 'pointer',
      rotate: '360deg',
    },
    expand_icon_angle: {
        cursor: 'pointer',
        rotate: '180deg',
    },
    edit_icon: {
        position: 'absolute',
        bottom: '-8px',
        right: 0,
        height: '22px',
        width: '22px',
        borderRadius: '50%',
        border: '1px solid #green',
        backgroundColor: 'green',
        textAlign: 'center',
        cursor: 'pointer',
        '& .MuiSvgIcon-root': {
            fontSize: '14px',
            color: '#fff',
        }
    },  
    list_btn_nav: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },  
  })
);
