import React from 'react';
import Header from '../specific/Header';
import Navibar from '../specific/Navibar';
import Footer from '../specific/Footer';
import { useStyles } from './LandingPageStyles';
import Dashboard from '../pages/Dashboard';

const LandingPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <header className={classes.navibar}>
                <Navibar />
            </header>
            <header className={classes.header}>
                <Header />
            </header>
            <main className={classes.home}>
                <Dashboard />
            </main>
            <footer className={classes.footer}>
                <Footer />
            </footer>
        </div>
    );
};

export default LandingPage;
