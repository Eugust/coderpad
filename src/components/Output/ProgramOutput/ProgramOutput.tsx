import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { boxSx, outputSx } from './ProgramOutputStyles';


interface props {
    result: string
}


export const ProgramOutput: React.FC<props> = ({result}) => {
    return (
        <Box sx = {boxSx}>
            <Typography sx = {outputSx}>
                Result: {result}
            </Typography>
        </Box>
    )
}