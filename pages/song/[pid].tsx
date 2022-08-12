import React, { useState, useEffect } from "react";
import SongsService from "../../services/songsService";
import Link from 'next/link';
import { useRouter } from 'next/router';
import {Chart, Song as Sg} from '../../interfaces';

function Song()
{
    const [song, setSong] = useState<Sg>();
    const [chartRun, setChartRun] = useState<Chart[]>([]);

    const router = useRouter();
    const pid = router.query.pid;

    useEffect(() => {
        console.log(router.query);
        getSong();
        getChartRun();
    }, []);

    const getSong = () =>
    {
        SongsService.getSong(Number(pid))
            .then(response => {
                setSong(response.data);
            })
            .catch(e => {
                console.log(e);
            });

    };

    const getChartRun = () =>
    {
        SongsService.getChartRun(Number(pid))
            .then(response => {
                setChartRun(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    return(<div className="site-section">
    {
        song ? (
            <div>
                <h3>Song</h3>
            <div>
                <label>Title: </label>
                {song.SongTitle}
            </div>
            <div>
                <label>Artist Name: </label>
                <Link href={`/artist/${song.ArtistID}`} className="song-artistname">{song.ArtistName}</Link>
            </div>
            <div>
                <label>Song ID: </label>
                {song.SongID}
            </div>
            </div>
        ) : (
            <div>
              <br />
              <p>no song chosen</p>
            </div>)
    }

        <h3>Chart statistics:</h3>
        {(chartRun.length > 0) ?
            (
            <div>
                <div>
                    <label>First sighted: </label>
                    <Link href={`/chart/${chartRun[0].ChartNo}`}>
                        {chartRun[0].ChartNo} 
                    </Link>
                </div>
                <div>
                    <label>Last sighted: </label>
                    <Link href={`/chart/${chartRun[chartRun.length - 1].ChartNo}`}>
                    {chartRun[chartRun.length - 1].ChartNo}
                    </Link>
                </div>
                <div>
                    <label>Total points: </label>
                    {-(chartRun.map(cr => cr.ChartPos).reduce(function(a, b)
                    {
                        return a+b;
                    }, -(chartRun.length * 31)))}
                </div>
                <div>
                    <label>Weeks on chart (Top 30): </label>
                    {chartRun.filter((ch) => {return (ch.ChartPos < 31)}).length}
                </div>
            </div>
        ) : (<div></div>)}

    <div className="all-chart-positions">
        <h3>Chart positions:</h3>
            {chartRun && chartRun.map((chart : Chart) =>
            <div className="chart" key={chart.ChartNo}>
                <Link href={`/chart/${chart.ChartNo}`}>
                    <a>
                    <div className="page-item">{chart.ChartNo}</div>
                    <div className="page-item">{(chart.ChartPos === 31) ?
                    ("bubbling under") : chart.ChartPos}</div>
                    </a>
                </Link>
            </div>
            )}
    </div>
</div>)
}

export default Song;