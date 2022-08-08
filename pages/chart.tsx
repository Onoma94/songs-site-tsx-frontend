import { useState, useEffect } from "react";
import SongsService from "../services/songsService";
import ChartSongFrame from "../components/chartSongFrame";
import {Chart} from "../interfaces";

function Chart()
{
    const [chartNo, setChartNo] = useState(791);
    const [chart, setChart] = useState([]);
    const [chartDate, setChartDate] = useState("");

    useEffect(() => {
        getChart(chartNo);
        getChartDate(chartNo);
    }, []);

    const getChart = (chartno : number) =>
    {
        SongsService.getChart(chartno)
          .then(response => {
              setChart((response.data));
              getChartDate(chartno);
          });
    }

    const getChartDate = (chartno : number) =>
    {
        SongsService.getChartDate(chartno)
            .then(response => {
                setChartDate(response.data.ChartDate.slice(0,10));
            })
    }

    return(
        <div className="site-section">
        <br /><br />This music chart has been compiled since November 4, 2000 based on requests and song popularity in Dołuje, Poland. It contained hot and fresh hit songs from genres such as Pop, Rock, Hip-Hop, and EDM. It was cancelled in April 2016. <br /><br />
        <div className="container">
        <h4>Chart No. {chartNo} ({chartDate})</h4>
            {
                chart && chart.filter(function (song : Chart) { return song.ChartPos < 31 }).map((song : Chart) =>
                    (
                        <ChartSongFrame song={song} key={song.ChartNo} />
                    )
                )
            }
            <h4>Bubbling Under</h4>
            {
                chart && chart.filter(function (song : Chart) { return song.ChartPos > 30 }).map((song : Chart) =>
                    (
                        <ChartSongFrame song={song} key={song.ChartNo} />
                    )
                )
            }
        </div>
        </div>
    )
}

export default Chart;