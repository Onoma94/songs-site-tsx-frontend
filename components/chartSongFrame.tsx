import React from "react";
import Link from 'next/link';
import {Chart} from '../interfaces'
export interface Props{
    song : Chart;
    key : number;
}

function ChartSongFrame(props : Props)
{
    return(
        <div className="song-frame"
        key={props.song.SongID}>
            <div className="chart-pos">{(props.song.ChartPos < 31) ? (props.song.ChartPos) : ("")}</div>
            <Link href={`/artist/${props.song.ArtistID}`} className="song-artistname">{props.song.ArtistName}</Link>
            <Link href={`/song/${props.song.SongID}`} className="song-songtitle">{props.song.SongTitle}</Link>
        </div>
    )
}

export default ChartSongFrame;