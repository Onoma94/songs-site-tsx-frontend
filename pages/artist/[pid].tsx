import React, { useState, useEffect } from "react";
import SongsService from "../../services/songsService";
import SongFrame from "../../components/songFrame";
import { useRouter } from 'next/router';
import {Artist as Ars, Song} from '../../interfaces';

function Artist()
{
    const [artist, setArtist] = useState<Ars>();
    const [songs, setSongs] = useState<Song[]>([]);

    const router = useRouter();
    const pid = router.query.pid;

    const plCollator = new Intl.Collator('pl');

    useEffect(() => {
        if (router.isReady){
        console.log(router.query);
        getArtist();
        getArtistSongs();
        }
    }, []);

    const getArtist = () =>
    {
        SongsService.getArtist(Number(pid))
            .then(response => {
                setArtist(response.data);
            })
            .catch(e => {
                console.log(e);
            });

    };

    const getArtistSongs = () =>
    {
        SongsService.getSongsByArtistId(Number(pid))
          .then(response => {
            setSongs(response.data.sort(function(a, b) {return plCollator.compare(a.SongTitle, b.SongTitle) }));
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
        });
    }

    return(<div className="site-section">
    {
        artist ? (
            <div>
                <h3>Artist</h3>
            <div>
                <label>Artist Name: </label>
                {artist.ArtistName}
            </div>
            <div>
                <label>Artist ID: </label>
                {artist.ArtistID}
            </div>
            </div>
        ) : (
            <div>
              <br />
              <p>no artist chosen</p>
            </div>)
    }
        <h4>Songs by the Artist</h4>
    {
        songs && songs.map((song : Song) =>
            (
                <SongFrame song={song} key={song.SongID} />
            )
        )
    }
</div>);
}

export default Artist;