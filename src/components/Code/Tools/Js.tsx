import * as React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor'
import { Box } from '@mui/material';
import { codeBoxSx } from '../ToolStyles';

import { getLocalStorageOrDefault, commitEvent } from '../../Func';


export const Js = () => {
    const [code, setCode] = React.useState(
        getLocalStorageOrDefault('JavaScript', '')
    )

    const handleKeybordEvent = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.ctrlKey && e.key == 'k') {
            e.preventDefault();
            setCode(commitEvent(window.getSelection()?.toString(), code));
        }
    }

    return (
        <Box sx = {codeBoxSx}>
            <CodeEditor
                value={code}
                language='js'
                onChange={(e) => {
                    setCode(e.target.value)
                    localStorage.setItem("JavaScript", e.target.value)
                }}
                onKeyDown={handleKeybordEvent}
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