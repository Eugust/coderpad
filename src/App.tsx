import React from 'react';
import { Grid, Box } from '@mui/material';
import Splitter from 'm-react-splitters';
import 'm-react-splitters/lib/splitters.css';

import { EnterName } from './components/Person/Person';
import { CodeWidget } from './components/Code/Code';
import { OutputWidget } from './components/Output/Output';
import { CodeHeader } from './components/Code/CodeHeader';
import { OutputHeader } from './components/Output/OutputHeader';
import {
  useStyles,
  mainGridSx,
  workGridSx,
  footerGridSX
} from './components/AppStyles'

import { getLocalStorageOrDefault } from './components/Func';


function App() {
  const [status, setStatus] = React.useState<string>('program output');
  const [name, setName] = React.useState<string>(
    getLocalStorageOrDefault("Username", '')
  );
  const [tool, setTool] = React.useState<string>('');
  const [result, setResult] = React.useState<string>('');
  const classes = useStyles();

  return (
    <div className="App">
      <Grid container className={classes.mainGrid} sx = {mainGridSx}>
        <Grid item sx={workGridSx} xs>
          <Splitter
            position="vertical"
            primaryPaneMaxWidth="60%"
            primaryPaneMinWidth="40%"
            primaryPaneWidth="900px"
            dispatchResize={true}
          >
            <Box>
              <CodeHeader tool={tool} setTool={setTool} setResult={setResult}/>
              <CodeWidget tool={tool}/>
            </Box>
            <Box>
              <OutputHeader setStatus={setStatus}/>
              <OutputWidget status={status} result={result} />
            </Box>
          </Splitter>
        </Grid>
        <Grid item sx={footerGridSX}>
          <EnterName name={name} setName={setName} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
