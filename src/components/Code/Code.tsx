import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { Python } from './Tools/Python';
import { Js } from './Tools/Js';
import { Go } from './Tools/Go';
import { C } from './Tools/C';

interface props {
    tool: string;
}

export const CodeWidget: React.FC<props> = ({tool}) => {
    switch(tool) {
        case('Python'):
            return <Python />
        case('C++'):
            return <C />
        case('Go'):
            return <Go />
        case('JavaScript'):
            return <Js />
        default:
            return (
                <Box sx = {{ m: '1%', p: '1%',}}>
                    <Typography
                        sx = {{
                            color: '#2196f3',
                            fontSize: '1.7rem',
                            fontFamily: 'Roboto',
                            letterSpacing: '0.1rem'
                        }}
                    >
                        Choose tool and type code here:
                    </Typography>
                </Box>
            )
    }
}