import React from 'react';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useStyles } from './NavHeadFootStyles';
import ModalPopUp from '../common/modalpopup/ModalPopUp';
import Logo from '../../assets/Logo.webp';
import { DropzoneArea } from 'react-mui-dropzone';
import Button from '@mui/material/Button';
import NavData from '../services/NavList.json';
import { List, Menu } from '@mui/icons-material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { HomeIcon } from '../services/Icons';

const Navibar = () => {
    const classes = useStyles();
    const [navWidth, setNavWidth] = React.useState<number>(200);
    const [arrowAngle, setArrowAngle] = React.useState<boolean>(true);
    const [modalPopUp, setModalPopUp] = React.useState<boolean>(false);
    const [title, setTitle] = React.useState<string>('');
    const [logoEveryWhere, setLogoEveryWhere] = React.useState<string>(Logo);
    const [logo, setLogo] = React.useState<string>(logoEveryWhere);

    const handleImage = (files: File[]) => {
        if (files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setLogoEveryWhere(reader.result as string);
            };
            if (file) {
                reader.readAsDataURL(file);
            }
        }
    }

    const handleSubmit = () => {
        setLogo(logoEveryWhere);
        setModalPopUp(false);
    }

    const LogoChanges = () => (
        <>
            <div style={{textAlign: 'center'}}>
                <img src={logoEveryWhere} alt='logo' className={classes.logo_preview}/>
            </div>
            <DropzoneArea
                dropzoneText="CLICK / DROP IMAGE HERE TO UPLOAD"
                filesLimit={1}
                showAlerts={false}
                showPreviewsInDropzone={false}
                onChange={handleImage}
            />
            <Button className={classes.submit_btn} style={{position: 'absolute'}} onClick={handleSubmit}>Submit</Button>
        </>
    );

    const handleExpandToggle = () => {
        setNavWidth(prevWidth => (prevWidth === 200 ? 50 : 200));
        setArrowAngle(prevAngle => !prevAngle);
    };

    const toggleModalPopUp = () => {
        setModalPopUp(prevState => !prevState);
    };

    const handleOnEdit = () => {
        setTitle('Edit The Logo Here');
        toggleModalPopUp();
    };  

    return (
        <>
            <div className={classes.nav_root} style={{ width: navWidth }}>
                <span className={arrowAngle ? classes.logo : classes.logo_none} style={{marginLeft: '10px'}}>
                    <img src={logo} alt='logo' className={classes.logo_img} />
                    <span className={classes.edit_icon} onClick={handleOnEdit}>
                        <EditOutlinedIcon />
                    </span>
                </span>
                <span className={arrowAngle ? classes.expand_icon : classes.expand_icon_angle} style={{paddingRight: '10px'}}>
                    <DoubleArrowIcon onClick={handleExpandToggle} />
                </span>
            </div>
            <div style={{padding: '10px', display: 'grid'}}>
                {
                    NavData.map((item:any, index: any) => {
                        return (
                            <Button className={classes.list_btn_nav}>
                                <p>{item.title}</p>
                                <ChevronRightIcon />
                            </Button>
                        )
                    })
                }
            </div>
            <ModalPopUp
                modelPopUp={modalPopUp}
                onModelPopUpToggle={toggleModalPopUp}
                title={title}
                content={<LogoChanges />}
            />
        </>
    );
};

export default Navibar;
