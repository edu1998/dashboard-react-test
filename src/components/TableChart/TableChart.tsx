import React, { FC } from 'react';
import './TableChart.css';
import Card from "../card/Card";
import CardBody from "../card/cardBody/Card/cardBody";
import {TABLE_DATA} from "../../services/table-data";

interface TableChartProps {
    children?: JSX.Element
}

const TableChart: FC<TableChartProps> = () => (
    <Card>
        <h3>Datos Generales</h3>
        <br/>
        <CardBody>
            <table>
                <tr className="border-bottom">
                    <th>Mes</th>
                    <th>Sku</th>
                    <th>Tiendas</th>
                    <th>Visitas</th>
                    <th>Inversion</th>
                    <th>Clics</th>
                    <th>Cth</th>
                    <th>Cpc</th>
                    <th>Orders</th>
                    <th>Ventas</th>
                    <th>Acos</th>

                </tr>
                {/*    -------- ------------ ---------- ---*/}
                {TABLE_DATA.map(dato => (
                    <tr>
                        <td>{dato.mes}</td>
                        <td>{dato.sku}</td>
                        <td>{dato.tienda}</td>
                        <td>{dato.visitas}</td>
                        <td>{dato.inversion}</td>
                        <td>{dato.clics}</td>
                        <td>{dato.cth}</td>
                        <td>{dato.cpc}</td>
                        <td>{dato.orders}</td>
                        <td>{dato.ventas}</td>
                        <td>{dato.acos}</td>
                    </tr>
                ))}

            </table>
        </CardBody>
    </Card>
);

export default TableChart;
