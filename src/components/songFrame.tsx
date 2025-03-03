import React from "react";
import Link from 'next/link';
import {Song} from '../../interfaces'

export interface Props {
    song : Song;
    key : number;
  }

function SongFrame(props : Props)
{
    return(
        <div className="song-frame"
            key={props.key}>
            <Link href={`/artist/${props.song.ArtistID}`}>
                <a className="song-artistname">{props.song.ArtistName}</a>
            </Link>
            <Link href={`/song/${props.song.SongID}`}>
                <a className="song-songtitle">{props.song.SongTitle}</a>
            </Link>
        </div>
    )
}

export default SongFrame;