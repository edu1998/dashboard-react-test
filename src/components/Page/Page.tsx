import React, { FC } from 'react';
import './Page.css';
import Card from "../card/Card";
import CardHeader from "../card/cardHeader/Card/cardHeader";
import CardBody from "../card/cardBody/Card/cardBody";
import {AiOutlineSync} from "react-icons/ai";
import ProgressBar from "../progressbar/ProgressBar";
import ProgressChart from "../ProgressChart/ProgressChart";
import TableChart from "../TableChart/TableChart";
import BarChart from "../BarChart/BarChart";

interface PageProps {}

const Page: FC<PageProps> = () => (
  <div className="Page">
      <div>
          <Card>
              <CardHeader>
                  <div className="align-end oblique_font">
                      {'Ultima Actualizacion Hoy a 12:22 PM  '}
                      <div className="researcher"><AiOutlineSync/></div>
                  </div>
              </CardHeader>
              <CardBody>
                  <div>
                      <h1 className="oblique_font">Bienvenido Jose Test</h1>
                      <span className="oblique_font">Completa tus datos y empieza a vender mas! que esperas!</span>
                  </div>
              </CardBody>
          </Card>
      </div>

      <div className="row">
          <div> <BarChart/> </div>
          <div> <ProgressChart title="Ventas"/> </div>
          <div> <ProgressChart title="Inversion y Retorno"/> </div>
      </div>


      <div>
        <TableChart/>
      </div>
  </div>
);

export default Page;
