import React from 'react';
import { Grid, Container } from '@mui/material';
import Splitter from 'm-react-splitters';
import 'm-react-splitters/lib/splitters.css';

import { EnterName } from './components/Person/Person';
import { CodeWidget } from './components/Code/Code';
import { OutputWidget } from './components/Output/Output';

import { getSessionStorageOrDefault } from './components/Func';


function App() {
  const [status, setStatus] = React.useState<string>('program output')
  const [name, setName] = React.useState<string>(
    getSessionStorageOrDefault("Username", '')
  )
  const [tool, setTool] = React.useState<string>('')
  const [result, setResult] = React.useState<string>('')

  return (
    <div className="App">
      <Grid
        container
        direction="column"
        alignItems="stretch"
        sx = {{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Grid
          item
          sx={{
            bgcolor: "text.primary",
            height: '100%',
            maxHeight: '100%',
            flex: 1,
          }}
          xs
        >
          <Splitter
            position="vertical"
            primaryPaneMaxWidth="80%"
            primaryPaneMinWidth="20%"
            primaryPaneWidth="900px"
            dispatchResize={true}
          >
            <CodeWidget tool={tool} setTool={setTool} setResult={setResult}/>
            <OutputWidget status={status} setStatus={setStatus} result={result}/>
          </Splitter>
        </Grid>
        <Grid
          item
          sx={{ bgcolor: "text.secondary", height: '7%', maxHeight: '10%' }}
        >
          <EnterName name={name} setName={setName} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
