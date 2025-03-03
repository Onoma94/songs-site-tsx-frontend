import { useState, useEffect } from "react";
import SongsService from "../../services/songsService";
import ChartSongFrame from "./components/ChartSongFrame/ChartSongFrame";
import {Chart} from "../../../interfaces";
import { useRouter } from 'next/router';

const Chart = () => {
    const router = useRouter();
    const pid = router.query.pid;
    const [chartNo, setChartNo] = useState(Number(pid));
    const [chart, setChart] = useState([]);
    const [chartDate, setChartDate] = useState("");

    useEffect(() => {
        getChart(chartNo);
        getChartDate(chartNo);
    }, [pid]);

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

    const buttonClick = () =>
    {
        if (document.querySelector("input") != null)
        {
            let input = parseInt(document.querySelector("input").value);
            if (!(isNaN(input)))
            {
                setChartNo(input);
                getChart(input);
            }
        }
    }

    return(
        <div className="site-section">
        <br /><br />This music chart has been compiled since November 4, 2000 based on requests and song popularity in Dołuje, Poland. It contained hot and fresh hit songs from genres such as Pop, Rock, Hip-Hop, and EDM. It was cancelled in April 2016. <br /><br />
        <div className="container">
        <input
                type="text"
                className="search-form"
                placeholder="Search by chart number"
            />
            <div className="input-group-append">
                <button
                    className="search-btn"
                    type="button"
                    onClick={buttonClick}
                >
                Search
                </button>
            </div>
        <h4>Chart No. {chartNo} ({chartDate})</h4>
            {
                chart && chart.filter(function (song : Chart) { return song.ChartPos < 31 }).map((song : Chart) =>
                    (
                        <ChartSongFrame song={song} key={song.ChartPos} />
                    )
                )
            }
            <h4>Bubbling Under</h4>
            {
                chart && chart.filter(function (song : Chart) { return song.ChartPos > 30 }).map((song : Chart) =>
                    (
                        <ChartSongFrame song={song} key={song.ChartPos} />
                    )
                )
            }
        </div>
        </div>
    )
}

export default Chart;
