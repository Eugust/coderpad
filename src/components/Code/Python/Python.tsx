import * as React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor'
import { Box } from '@mui/material';
import styles from './Python.module.scss'
import cn from 'classnames'

import { getSessionStorageOrDefault } from '../../Func';


const commitEvent = (commit: string | undefined, code: string) => {
    if (commit) {
        if (commit.startsWith(`'''`) && commit.endsWith(`'''`)) {
            let newCommit = (commit.replace(`'''`, ``)).replace(`'''`, ``)
            return code.replace(commit, newCommit)
        }
        return code.replace(commit, `'''${commit}'''`)
    }
    return code
}


export const Python = () => {
    const [code, setCode] = React.useState(
        getSessionStorageOrDefault('Python', '')
    )

    const handleKeybordEvent = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.ctrlKey && e.key == 'k') {
            e.preventDefault();
            setCode(commitEvent(window.getSelection()?.toString(), code));
        }
    }

    return (
        <Box
            sx = {{
                height: '70vh',
                overflow: 'auto',
                mx: '10%',
                my: '5%',
            }}
        >
            <CodeEditor
                value={code}
                language='python'
                onChange={(e) => {
                    setCode(e.target.value)
                    localStorage.setItem("Python", e.target.value)
                }}
                onKeyDown={handleKeybordEvent}
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