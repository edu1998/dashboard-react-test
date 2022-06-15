import React, {FC} from "react";
import ProgressChart from "../ProgressChart/ProgressChart";
import {ProgressDataType} from "../../resources/types/ProgressData.type";

interface ProgressChartListProps {
    progressList: ProgressDataType[]
}

const ProgressChartList: FC<ProgressChartListProps> = ({progressList}) => (
    <>
        {progressList?.map(progress => (
            <div> <ProgressChart {...progress} /></div>
        ))}
    </>
)

export default ProgressChartList
