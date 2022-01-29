import * as React from 'react';
import { AppBar, Button, Box, Toolbar, InputLabel, FormControl, Grid } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#1976d2',
        },
    },
});

export const CodeHeader = () => {
    const [tool, setTool] = React.useState('');
    const tools = [
        { id: 1, name: "Python"},
        { id: 2, name: "C++"},
        { id: 3, name: "JavaScript"},
        { id: 4, name: "Go"}
    ];
        
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
        </div>
    )
}