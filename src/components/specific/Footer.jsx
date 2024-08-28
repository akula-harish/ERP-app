import React from 'react'
import { CommonUtility } from '../services/utility/CommonUtility';

const Footer = () => {
    let timeDateCountry = CommonUtility.getTimeDateCountry();
    return (
        <>
           <p style={{color: '#6c8cb1'}}>Copyright @ {timeDateCountry.date} India</p>
        </>
    )
}
export default Footer;