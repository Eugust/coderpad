import * as React from 'react';
import {
    AppBar,
    Button,
    Toolbar,
    InputLabel,
    FormControl,
    Grid,
    Select,
    MenuItem
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#1976d2',
        },
    },
});

interface props {
    tool: string;
    setTool: React.Dispatch<React.SetStateAction<string>>;
    setResult: React.Dispatch<React.SetStateAction<string>>;
}

const Check = (code: string | null) => {
    if (code) {
        let codeSize = new Blob([code]).size
        if (codeSize <= 1024) {
            return "Ok"
        }
        return "Error: too big code"
    }
    return "Please, input your code"
}

export const CodeHeader: React.FC<props> = ({tool, setTool, setResult}) => {
    const tools = [
        { id: 1, name: "Python"},
        { id: 2, name: "C++"},
        { id: 3, name: "JavaScript"},
        { id: 4, name: "Go"}
    ];

    const handleCheck = () => {
        setResult(Check(localStorage.getItem(tool)))
    }
        
    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                    <AppBar position='static' sx = {{ height: '4.5rem', justifyContent: 'center' }}>
                        <Toolbar>
                            <Grid item xs={10}>
                                <Button
                                    variant="contained"
                                    color="success"
                                    onClick={handleCheck}
                                >
                                    Run
                                    <PlayArrowIcon />
                                </Button>
                            </Grid>
                            <Grid item xs={0}>
                                <FormControl sx={{ m:1, minWidth: 80 }}>
                                    <InputLabel>Tool</InputLabel>
                                    <Select
                                        value={tool}
                                        onChange={(e) => setTool(e.target.value)}
                                        autoWidth
                                        label="Tool"
                                    >
                                        {tools.map((tool) => (
                                            <MenuItem value={tool.name}>{tool.name}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
        </div>
    )
}