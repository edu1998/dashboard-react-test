import React, { FC } from 'react';
import './progressbar.css';

interface ProgressBarProps {
    percent: number;
}

const ProgressBar: FC<ProgressBarProps> = ({percent}) => {
    const style = { "--value": percent } as any;
    const allowedProps = { role:"progressbar", "aria-valuenow":"65", "aria-valuemin":"0", "aria-valuemax":"100"} as any

    return (
        <div {...allowedProps}  style={style}/>
    )
}

export default ProgressBar;
