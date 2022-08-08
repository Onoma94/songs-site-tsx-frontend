import React from "react";
import Link from 'next/link';
import {Song} from '../interfaces'

export interface Props {
    song : Song;
    key : number;
  }

function SongFrame(props : Props)
{
    return(
        <div className="song-frame"
            key={props.key}>
            <Link href={`/artist/artistid/${props.song.ArtistID}`} className="song-artistname">{props.song.ArtistName}</Link>
            <Link href={`/song/songid/${props.song.SongID}`} className="song-songtitle">{props.song.SongTitle}</Link>
        </div>
    )
}

export default SongFrame;