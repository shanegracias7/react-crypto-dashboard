import React from "react";
import ReactHighcharts from "react-highcharts";
import highchartsConfig from "./HighchartsConfig";
import { Tile } from "../Shared/Tile";
import { AppContext } from "../App/AppProvider";
import HighchartsTheme from './HighchartsTheme';
import ChartSelect from './ChartSelect'
import Loading from "../Shared/Loading";
import LoadingChart from "../Shared/LoadingChart";

ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

export default function(){
    return(
        <AppContext.Consumer>
            {
                ({historical,changeChartSelect})=>(
                    <Tile>
                        <ChartSelect 
                            defaultValue={"months"} 
                            onChange={e=>changeChartSelect(e.target.value)}
                        >
                            <option value="days">Days</option>
                            <option value="weeks">Weeks</option>
                            <option value="months">Months</option>
                        </ChartSelect>
                        {historical ? <ReactHighcharts config={highchartsConfig(historical)} /> : <LoadingChart/>}
                    
                    </Tile>
                )
            }
        </AppContext.Consumer>

    )
    
}