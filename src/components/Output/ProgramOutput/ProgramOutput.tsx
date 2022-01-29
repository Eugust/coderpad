import * as React from 'react';
import styles from './ProgramOutput.module.scss'
import cn from 'classnames'


interface props {
    result: string
}


export const ProgramOutput: React.FC<props> = ({result}) => {

    return (
        <div className={cn(styles.code)}>
            <div className={cn(styles.p)}>
                {result}
            </div>
        </div>
    )
}