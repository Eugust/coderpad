import * as React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor'

import { getSessionStorageOrDefault } from '../../Func';


export const Go = () => {
    const [code, setCode] = React.useState(
        getSessionStorageOrDefault('Go', '')
    )

    return (
        <div>
            <CodeEditor
                value={code}
                language='go'
                onChange={(e) => {
                    setCode(e.target.value)
                    localStorage.setItem("Go", e.target.value)
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