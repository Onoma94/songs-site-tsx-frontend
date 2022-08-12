import React, { useState, useEffect } from "react";
import SongsService from "../services/songsService";
import Link from "next/link";
import Pagination from './pagination';

function ArtistList()
{
    const [artists, setArtists] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [artistsPerPage, setArtistsPerPage] = useState(48);

    const indexOfLastArtist = currentPage * artistsPerPage;
    const indexOfFirstArtist = indexOfLastArtist - artistsPerPage;
    const currentArtists = artists.slice(indexOfFirstArtist, indexOfLastArtist);

    const plCollator = new Intl.Collator('pl');

    /* on page load */
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

    /* two functions to search for artists */

    const onChangeSearchName = e =>
    {
        const searchName = e.target.value;
        setSearchName(searchName);
    };

    const getArtistsByName = () =>
    {
        if (searchName == "") getAllArtists();
        else
        {
        SongsService.getArtistsByName(searchName)
          .then(response => {
            setArtists(response.data.sort(function(a, b) {return plCollator.compare(a.ArtistName, b.ArtistName) }));
          })
          .catch(e => {
            console.log(e);
        });
        }
        setCurrentPage(1);
    };

    return(
    <div className="container">
            <input
                type="text"
                className="search-form"
                placeholder="Search by name"
                value={searchName}
                onChange={onChangeSearchName}
            />
            <div className="input-group-append">
                <button
                    className="search-btn"
                    type="button"
                    onClick={getArtistsByName}
                >
                Search
                </button>
            </div>
        <p>Select an artist or use search!</p>
        <div className="songs-container">
            <h4>All Artists</h4>
            {
                currentArtists && currentArtists.map((artist : any) =>
                (
                    <div className="song-frame" key={artist.ArtistID}>
                        <Link href={`/artist/${artist.ArtistID}`} className="song-frame">
                            <a className="song-artistname">{artist.ArtistName}</a>
                        </Link>
                    </div>
                ))
            }
        </div>
        <Pagination page={currentPage} totalPages={Math.ceil(artists.length / artistsPerPage)} handlePagination={setCurrentPage} />
    </div>)
}

export default ArtistList;