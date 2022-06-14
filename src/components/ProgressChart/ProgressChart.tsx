import React, { FC } from 'react';
import './ProgressChart.css';
import Card from "../card/Card";
import CardHeader from "../card/cardHeader/Card/cardHeader";
import CardBody from "../card/cardBody/Card/cardBody";
import ProgressBar from "../progressbar/ProgressBar";

interface ProgressChartProps {
    title: string;
}

const ProgressChart: FC<ProgressChartProps> = ({title}) => (
    <div className="progress-chart">
        <Card>
            <h3 className="null-margin">{title}</h3>
            <br/>
            <CardBody>
                <div className="chart-body">
                    <div className="row" >
                        <div className="item_center margin-right-label-chart">
                            <span className="pre-percent">80%</span>
                        </div>
                        <ProgressBar percent={65}/>
                        <div className="item_center margin-left-label-chart">
                            <span className="pre-percent">20%</span>
                        </div>
                    </div>
                    <br/>
                    <div className="row justify-content-space-between">
                        <div>
                            <label><span className="dot"/> Campaña</label>
                        </div>
                        <div>
                            <label><span className="dot"/> Sin campaña</label>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    </div>
);

export default ProgressChart;
