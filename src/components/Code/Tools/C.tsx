import * as React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor'
import { Box } from '@mui/material';
import { codeBoxSx } from '../ToolStyles';

import { getLocalStorageOrDefault } from '../../Func';


export const C = () => {
    const [code, setCode] = React.useState(
        getLocalStorageOrDefault('C++', '')
    )

    return (
        <Box sx = {codeBoxSx}>
            <CodeEditor
                value={code}
                language='cpp'
                onChange={(e) => {
                    setCode(e.target.value)
                    localStorage.setItem("C++", e.target.value)
                }}
                padding={15}
                style = {{
                    fontSize: 15,
                    backgroundColor: "#2b2a2a",
                    fontFamily: 'ui-monospace,SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace',
                    color: 'white'
                }}
            />
        </Box>
    )
}