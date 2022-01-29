import * as React from 'react'
import { AppBar, Button, Toolbar, Box} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../Code/Code';

import { ProgramOutput } from './ProgramOutput/ProgramOutput'
import { Notes } from './Notes/Notes'

interface props {
    status: string;
    result: string;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
}

export const OutputWidget: React.FC<props> = ({ status, setStatus, result }) => {

    const interviewerNotes = () => {
        setStatus('interviewer notes')
    }

    const programOutput = () => {
        setStatus('program output')
    }

    if (status == 'program output') {
        return (
            <div>
                <ThemeProvider theme={darkTheme}>
                    <AppBar position='static'>
                        <Toolbar>
                            <Button
                                color="secondary"
                                onClick={programOutput}
                            >
                                Program output
                            </Button>
                            <Button
                                color="secondary"
                                onClick={interviewerNotes}
                            >
                                Interviewer notes
                            </Button>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
                <Box
                    sx = {{
                        overflow: 'auto'
                    }}
                >
                    <ProgramOutput result={result}/>
                </Box>
            </div>
        )
    } else {
        return (
            <div>
                <ThemeProvider theme={darkTheme}>
                    <AppBar position='static'>
                        <Toolbar>
                            <Button
                                color="secondary"
                                onClick={programOutput}
                            >
                                Program output
                            </Button>
                            <Button
                                color="secondary"
                                onClick={interviewerNotes}
                            >
                                Interviewer notes
                            </Button>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
                <Notes />
            </div>
        )
    }
}