import React, { useState, useEffect } from "react";
import SongsService from "../services/songsService";
import Link from "next/link";
import Pagination from './pagination';

function ArtistList()
{
    const [artists, setArtists] = useState([]);
    //const [searchName, setSearchName] = useState("");
    //const [currentPage, setCurrentPage] = useState(1);
    //const [artistsPerPage, setArtistsPerPage] = useState(50);

    //const indexOfLastArtist = currentPage * artistsPerPage;
    //const indexOfFirstArtist = indexOfLastArtist - artistsPerPage;
    //const currentArtists = artists.slice(indexOfFirstArtist, indexOfLastArtist);

    const plCollator = new Intl.Collator('pl');
    useEffect(() => {
        getAllArtists();
      }, []);
    const getAllArtists = () => {
        SongsService.getAllArtists().then((response : any) =>
            {
                setArtists((response.data).sort(function(a : any, b : any) {return plCollator.compare(a.ArtistName, b.ArtistName) }));
                console.log(artists);
            })
            .catch((e : any) => {
              console.log(e);
            });
    };
    return(
    <div className="container">
        <p>Select an artist or use search!</p>
        <div className="songs-container">
            <h4>All Artists</h4>
            {
                artists && artists.map((artist : any) =>
                (
                    <Link href={`/artist/${artist.ArtistID}`} className={"song-frame"}
                        key={artist.ArtistID}>
                        <div className="song-artistname">{artist.ArtistName}</div>
                    </Link>
                ))
            }
        </div>
    </div>)
}

export default ArtistList;