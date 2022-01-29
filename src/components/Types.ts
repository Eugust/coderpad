export type PythonCode = {
    PythonCode: string
}

export interface RightPanel {
    status: 'program output' | 'interviewer notes'
}

export interface Person {
    name: string
}

export interface RunCode {
    tool: 'Python' | 'C++' | 'JavaScript' | 'Go'
    code: string
    onClick: () => void
}