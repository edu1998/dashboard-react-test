import React, { FC } from 'react';
import './TableChart.css';
import Card from "../card/Card";
import CardBody from "../card/cardBody/Card/cardBody";
import {Table} from "antd";

interface TableChartProps {
    children?: JSX.Element
    tableData: any,
    tableColumns: any
}

const TableChart: FC<TableChartProps> = ({tableColumns, tableData}) => (
    <Card>
        <h3>Datos Generales</h3>
        <br/>
        <CardBody>
            <Table columns={tableColumns} dataSource={tableData}/>
        </CardBody>
    </Card>
);

export default TableChart;
