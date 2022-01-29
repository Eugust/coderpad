import * as React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './ProgramOutput.module.scss'
import cn from 'classnames'


interface props {
    result: string
}


export const ProgramOutput: React.FC<props> = ({result}) => {

    return (
        <Box
            sx = {{
                m: '5%',
                p: '5%',
            }}
        >
            <Typography
                sx = {{
                    color: '#fafafa'
                }}
            >
                Result: {result}
            </Typography>
        </Box>
    )
}