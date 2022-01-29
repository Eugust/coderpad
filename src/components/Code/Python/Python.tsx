import * as React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor'
import styles from './Python.module.scss'
import cn from 'classnames'

import { getSessionStorageOrDefault } from '../../Func';


export const Python = () => {
    const [code, setCode] = React.useState(
        getSessionStorageOrDefault('Python', '')
    )

    return (
        <div className={cn(styles.python)}>
            <CodeEditor
                value={code}
                language='python'
                onChange={(e) => {
                    setCode(e.target.value)
                    localStorage.setItem("Python", e.target.value)
                }}
                padding={15}
                style = {{
                    fontSize: 12,
                    backgroundColor: "#f5f5f5",
                    fontFamily: 'ui-monospace,SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace'
                }}
            />
        </div>
    )
}