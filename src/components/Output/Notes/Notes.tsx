import * as React from 'react';
import { TextField } from '@mui/material';
import styles from './Notes.module.scss'
import cn from 'classnames'

import { getSessionStorageOrDefault } from '../../Func';


export const Notes = () => {
    const [notes, setNotes] = React.useState(
        getSessionStorageOrDefault("Notes", '')
    );

    const inputRef = React.useRef<HTMLInputElement>(null);

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setNotes(e.target.value)
        localStorage.setItem("Notes", e.target.value)
    }

    console.log(localStorage.getItem("Notes"))

    return (
        <div className={cn(styles.notes)}>
            <form
                onSubmit={(e) => {
                    inputRef.current?.blur();
                }}
            >
                <TextField
                    value={notes}
                    onChange={onChange}
                    fullWidth
                    multiline
                />
            </form>
        </div>
    )
}