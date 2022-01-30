import * as React from 'react';
import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles({
    dialogText: {
        margin: "dense",
        variant: "standard",
    }
})

export const outputBox = {
    ml: '1%',
    mt: '0.5%',
    mb: '0.5%',
    px: '0.5%',
    py: '0.3%',
    border: 1,
    borderRadius: 2,
    bgcolor: '#424242',
    display: 'inline-flex',
} as const;

export const nameStyle = {
    color: '#fafafa',
    fontFamily: 'Roboto',
    letterSpacing: '0.1rem'
} as const;

export const circle = {
    display: 'inline-flex',
    border: 1,
    borderRadius: '50%',
    bgcolor: '#4caf50',
    width: '1rem',
    height: '1rem',
    m: 0.3,
    ml: 1,
    mt: 0.4
} as const;