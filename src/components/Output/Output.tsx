import * as React from 'react'

import { ProgramOutput } from './ProgramOutput/ProgramOutput'
import { Notes } from './Notes/Notes'

interface props {
    status: string;
    result: string;
}

export const OutputWidget: React.FC<props> = ({ status, result }) => {
    switch(status) {
        case('interviewer notes'):
            return <Notes />
        default:
            return <ProgramOutput result={result} />
    }
}