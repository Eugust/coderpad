import * as React from 'react';
import { TextField, Box, Input } from '@mui/material';
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
                <Input
                    sx = {outputSx}
                    value={notes}
                    onChange={onChange}
                    disableUnderline={true}
                    fullWidth
                    multiline
                    placeholder='To uncomment highlight the comment along with hash marks'
                />
            </form>
        </Box>
    )
}