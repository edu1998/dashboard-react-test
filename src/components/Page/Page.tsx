import React, { FC } from 'react';
import './Page.css';
import TableChart from "../TableChart/TableChart";
import BarChart from "../BarChart/BarChart";
import WelcomeLayout from "./WelcomeLayout/WelcomeLayout";
import {AiOutlineSync} from "react-icons/ai";
import {TABLE_DATA as tableData, TABLE_COLUMNS as tableColumns} from "../../services/table-data";
import {BAR_CHART_CONFIG as chartConfig} from "../../services/barchart-data";
import ProgressChartList from "../ProgressChartList/ProgressChartList";
import {PROGRESS_DATA_LIST as progressList} from "../../services/progress-data";


const Page: FC = () => (
  <div className="Page">
      <div>
         <WelcomeLayout
             title="Bienvenido Jose Test"
             subTitle="Completa tus datos y empieza a vender mas! que esperas!"
             ResearchIcon={AiOutlineSync}
         />
      </div>

      <div className="row">
          <BarChart chartConfig={chartConfig}/>
          <ProgressChartList progressList={progressList}  />
      </div>

      <div>
        <TableChart tableData={tableData} tableColumns={tableColumns}/>
      </div>
  </div>
);

export default Page;
