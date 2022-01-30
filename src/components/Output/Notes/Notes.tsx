import * as React from 'react';
import { TextField, Box } from '@mui/material';
import { boxSx, outputSx } from './NotesStyles';

import { getLocalStorageOrDefault } from '../../Func';


export const Notes = () => {
    const [notes, setNotes] = React.useState(
        getLocalStorageOrDefault("Notes", '')
    );
    const inputRef = React.useRef<HTMLInputElement>(null);

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setNotes(e.target.value)
        localStorage.setItem("Notes", e.target.value)
    }

    return (
        <Box sx = {boxSx}>
            <form onSubmit={(e) => { inputRef.current?.blur(); }}>
                <TextField
                    sx = {outputSx}
                    value={notes}
                    onChange={onChange}
                    fullWidth
                    multiline
                    margin='normal'
                    placeholder='To uncomment highlight the comment along with hash marks'
                />
            </form>
        </Box>
    )
}