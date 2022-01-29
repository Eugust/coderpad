import * as React from 'react';
import { AppBar, Button, Box, Toolbar, TextField, InputLabel, FormControl, Grid } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Python } from './Python/Python';
import { CodeHeader } from './CodeHeader/CodeHeader';
import { Js } from './JavaScript/Js';
import { Go } from './Go/Go';
import { C } from './C++/C';

interface props {
    tool: string;
    setTool: React.Dispatch<React.SetStateAction<string>>;
    setResult: React.Dispatch<React.SetStateAction<string>>;
}

function Check(code: string | null) {
    if (code) {
        let codeSize = new Blob([code]).size
        if (codeSize <= 1024) {
            return "Ok"
        }
        return "Error: too big code"
    }
    return "Please, input your code"
}

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#1976d2',
        },
    },
});

export const CodeWidget: React.FC<props> = ({tool, setTool, setResult}) => {
    const tools = [
        { id: 1, name: "Python"},
        { id: 2, name: "C++"},
        { id: 3, name: "JavaScript"},
        { id: 4, name: "Go"}
    ];

    const handleCheck = () => {
        setResult(Check(localStorage.getItem(tool)))
    }

    if (tool == 'Python') {
        return (
            <div>
                <ThemeProvider theme={darkTheme}>
                    <AppBar position='static'>
                        <Toolbar>
                            <Grid item xs={10}>
                                <Button
                                    variant="contained"
                                    color="success"
                                    onClick={handleCheck}
                                >
                                    Run
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
                <Box>
                    <Python />
                </Box>
              </div>
        )
    } else if (tool == 'C++') {
        return (
            <div>
                <ThemeProvider theme={darkTheme}>
                    <AppBar position='static'>
                        <Toolbar>
                            <Grid item xs={10}>
                                <Button
                                    variant="contained"
                                    color="success"
                                    onClick={handleCheck}
                                >
                                    Run
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
                <Box>
                    <C />
                </Box>
              </div>
        )
    } else if (tool == 'Go') {
        return (
            <div>
                <ThemeProvider theme={darkTheme}>
                    <AppBar position='static'>
                        <Toolbar>
                            <Grid item xs={10}>
                                <Button
                                    variant="contained"
                                    color="success"
                                    onClick={handleCheck}
                                >
                                    Run
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
                <Box>
                    <Go />
                </Box>
              </div>
        )
    } else if (tool == 'JavaScript') {
        return (
            <div>
                <ThemeProvider theme={darkTheme}>
                    <AppBar position='static'>
                        <Toolbar>
                            <Grid item xs={10}>
                                <Button
                                    variant="contained"
                                    color="success"
                                    onClick={handleCheck}
                                >
                                    Run
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
                <Box>
                    <Js />
                </Box>
              </div>
        )
    } else {
        return (
            <div>
                <ThemeProvider theme={darkTheme}>
                    <AppBar position='static'>
                        <Toolbar>
                            <Grid item xs={10}>
                                <Button variant="contained" color="success">
                                    Run
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
                <Box>
                    <h2>Здесь ваш код</h2>
                </Box>
            </div>
        )
    }
}