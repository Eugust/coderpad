import React, {useState} from 'react';
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
    Box
} from '@mui/material';
import { useStyles, outputBox, nameStyle, circle } from './PersonStyle'


interface props {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
};


export const EnterName: React.FC<props> = ({ name, setName }) => {
    const [open, setOpen] = useState(true)

    const handleClose = () => {
        setOpen(false)
        localStorage.setItem("Username", name);
    };

    const stored = localStorage.getItem("Username");

    const classes = useStyles();

    if (!stored) {
        return (
            <div>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Hi, welcome to Fakecoderpad</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Tell me your name:
                        </DialogContentText>
                        <TextField
                            className={classes.dialogText}
                            autoFocus
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} type="submit">Let's go!</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    } else {
        return (
            <Box sx = {outputBox}>
                <Typography sx = {nameStyle}>
                    {localStorage.getItem("Username")} : Online
                </Typography>
                <Box sx = {circle} />
            </Box>
        )
    }
}