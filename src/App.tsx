import React from 'react';
import { Grid } from '@mui/material';
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
      <Grid container sx={{ bgcolor: "text.primary", height: 700 }}>
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
      <Grid container sx={{ bgcolor: "text.secondary", height: 53 }}>
        <EnterName name={name} setName={setName} />
      </Grid>
    </div>
  );
}

export default App;
