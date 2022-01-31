import * as React from 'react'
import { AppBar, Button, Toolbar} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../Code/CodeHeader';


interface props {
    setStatus: React.Dispatch<React.SetStateAction<string>>;
}

export const OutputHeader: React.FC<props> = ({ setStatus}) => {

    const interviewerNotes = () => {
        setStatus('interviewer notes')
    }

    const programOutput = () => {
        setStatus('program output')
    }
    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <AppBar position='static' sx = {{ height: '4.5rem', justifyContent: 'center' }}>
                    <Toolbar>
                        <Button
                            color="secondary"
                            onClick={programOutput}
                            sx = {{
                                fontSize: {
                                    md: '1rem',
                                    xs: '0.6rem'
                                }
                            }}
                        >
                            Program output
                        </Button>
                        <Button
                            color="secondary"
                            onClick={interviewerNotes}
                            sx = {{
                                fontSize: {
                                    md: '1rem',
                                    xs: '0.6rem'
                                }
                            }}
                        >
                            Interviewer notes
                        </Button>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </div>
    )
}