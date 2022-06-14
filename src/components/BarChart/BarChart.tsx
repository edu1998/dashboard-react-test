import React, { FC } from 'react';
import './BarChart.css';
import Card from "../card/Card";
import CardBody from "../card/cardBody/Card/cardBody";

interface BarChartProps {}

const BarChart: FC<BarChartProps> = () => (
    <Card>
        <h3>Ordenes</h3>
        <CardBody>
            <div className="barChart">
                <div className="data-point">
                    <div className="bar"/>
                    <span className="label">Ene</span>
                </div>
                <div className="data-point">
                    <div className="bar"/>
                    <span className="label">Ene</span>
                </div>
                <div className="data-point">
                    <div className="bar"/>
                    <span className="label">Ene</span>
                </div>
                <div className="data-point">
                    <div className="bar"/>
                    <span className="label">Ene</span>
                </div>
                <div className="data-point">
                    <div className="bar"/>
                    <span className="label">Ene</span>
                </div>
                <div className="data-point">
                    <div className="bar"/>
                    <span className="label">Ene</span>
                </div>
                <div className="data-point">
                    <div className="bar"/>
                    <span className="label">Ene</span>
                </div>
                <div className="data-point">
                    <div className="bar"/>
                    <span className="label">Ene</span>
                </div>
                <div className="data-point">
                    <div className="bar"/>
                    <span className="label">Ene</span>
                </div>
                <div className="data-point">
                    <div className="bar"/>
                    <span className="label">Ene</span>
                </div>
            </div>
        </CardBody>
    </Card>
);

export default BarChart;
