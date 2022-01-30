import * as React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor'
import { Box } from '@mui/material';
import { codeBoxSx } from './ToolStyles';

import { getSessionStorageOrDefault } from '../Func';


export const Js = () => {
    const [code, setCode] = React.useState(
        getSessionStorageOrDefault('JavaScript', '')
    )

    return (
        <Box sx = {codeBoxSx}>
            <CodeEditor
                value={code}
                language='js'
                onChange={(e) => {
                    setCode(e.target.value)
                    localStorage.setItem("JavaScript", e.target.value)
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