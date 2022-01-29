import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import styles from './Person.module.scss'
import cn from 'classnames'


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

    const stored = localStorage.getItem("Username")

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
                            autoFocus
                            margin="dense"
                            id="name"
                            fullWidth
                            variant="standard"
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
            <Box
                sx = {{
                    ml: '1%',
                    mt: '0.5%',
                    mb: '0.5%',
                    px: '0.5%',
                    py: '0.3%',
                    border: 1,
                    borderRadius: 2,
                    bgcolor: '#424242',
                    display: 'inline-flex',
                }}
            >
                <div className={cn(styles.name)}>
                    {localStorage.getItem("Username")} : Online
                </div>
                <Box
                    sx = {{
                        display: 'inline-flex',
                        border: 1,
                        borderRadius: '50%',
                        bgcolor: '#4caf50',
                        width: '1rem',
                        height: '1rem',
                        m: 0.3,
                        ml: 1
                    }}
                ></Box>
            </Box>
        )
    }
}