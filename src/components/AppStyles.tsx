import * as React from 'react';
import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles(() => ({
    mainGrid: {
        direction: "ltr",
        height: '100vh',
        alignItems: "stretch",
    }
}));

export const mainGridSx = {
    display: 'flex',
    flexDirection: 'column'

} as const;

export const workGridSx = {
    bgcolor: "text.primary",
    height: '100%',
    maxHeight: '100%',
    flex: 1,
} as const;

export const footerGridSX = {
    bgcolor: "text.primary",
    height: '7%',
    maxHeight: '10%',
    borderTop: 1,
    borderColor: '#ffffff',
}