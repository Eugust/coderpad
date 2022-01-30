import * as React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor'
import { Box } from '@mui/material';
import { codeBoxSx } from '../ToolStyles';

import { getLocalStorageOrDefault } from '../../Func';


export const Go = () => {
    const [code, setCode] = React.useState(
        getLocalStorageOrDefault('Go', '')
    )

    return (
        <Box sx = {codeBoxSx}>
            <CodeEditor
                value={code}
                language='go'
                onChange={(e) => {
                    setCode(e.target.value)
                    localStorage.setItem("Go", e.target.value)
                }}
                padding={15}
                style = {{
                    fontSize: 14,
                    backgroundColor: "#2b2a2a",
                    fontFamily: 'ui-monospace,SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace',
                    color: 'white'
                }}
            />
        </Box>
    )
}