import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => 
    createStyles({
        root: {
            display: 'grid',
            gridTemplateAreas: `
                "navibar header"
                "navibar home"
                "navibar footer"
            `,
            gridTemplateRows: 'auto 1fr auto',
            gridTemplateColumns: 'auto 1fr',
            height: '100vh',
        },
        navibar: {
            gridArea: 'navibar',
            position: 'relative',
            boxShadow: '0px 5px 3px 0px #ccc',
            borderRight: '1px solid #ccc',
        },
        header: {
            gridArea: 'header',
            height: '52px',
            boxShadow: '0px 2px 4px 0px #ccc',
            borderBottom: '1px solid #ccc',
            padding: '10px',
        },
        home: {
            gridArea: 'home',
            padding: '10px',
        },
        footer: {
            gridArea: 'footer',
            height: '40px',
            textAlign: 'end',
            padding: '10px',
            // boxShadow: '5px 0px 15px 1px #ccc',
            // borderTop: '1px solid #ccc',
        },
    })
);
