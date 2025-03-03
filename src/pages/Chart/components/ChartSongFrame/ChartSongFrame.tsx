import React from "react";
import Link from 'next/link';
import {Chart} from '../../../../../interfaces'
export interface Props{
    song : Chart;
    key : number;
}

const ChartSongFrame = ({song, key} : Props) => {
    return(
        <div className="song-frame" key={song.SongID}>
            <div className="chart-pos">
                {(song.ChartPos < 31) ? (song.ChartPos) : ("")}
            </div>
            <Link href={`/artist/${song.ArtistID}`}>
                <a className="song-artistname">
                    {song.ArtistName}
                </a>
            </Link>
            
            <Link href={`/song/${song.SongID}`}>
                <a className="song-songtitle">
                    {song.SongTitle}
                </a>
            </Link>
        </div>
    )
}

export default ChartSongFrame;
