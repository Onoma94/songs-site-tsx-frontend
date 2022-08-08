import React, { useState, useEffect } from "react";
import SongsService from "../services/songsService";
import Pagination from './pagination';
import SongFrame from "./songFrame";
import {Song} from "../interfaces";

function SongList()
{
    const [songs, setSongs] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [songsPerPage, setSongsPerPage] = useState(48);

    const plCollator = new Intl.Collator('pl');

    useEffect(() => {
        getAllSongs();
      }, []);

    
    const indexOfLastSong = currentPage * songsPerPage;
    const indexOfFirstSong = indexOfLastSong - songsPerPage;
    const currentSongs = songs.slice(indexOfFirstSong, indexOfLastSong);

    const getAllSongs = () =>
    {
        SongsService.getAllSongs()
          .then(response => {
            setSongs((response.data).sort(function(a, b) {return plCollator.compare(a.ArtistName, b.ArtistName) }));
          })
          .catch(e => {
            console.log(e);
          });
        setCurrentPage(1);
    };

    /* two functions to search for songs */

    const onChangeSearchTitle = e =>
    {
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    };

    const getSongsByTitle = () =>
    {
        if (searchTitle == "") getAllSongs();
        else
        {
        SongsService.getSongsByTitle(searchTitle)
          .then(response => {
            setSongs(response.data.sort(function(a, b) {return plCollator.compare(a.SongTitle, b.SongTitle) }));
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
                placeholder="Search by title"
                value={searchTitle}
                onChange={onChangeSearchTitle}
            />
            <div className="input-group-append">
                <button
                    className="search-btn"
                    type="button"
                    onClick={getSongsByTitle}
                >
                Search
                </button>
            </div>
            <p>Select a song or use search!</p>
            <div className="songs-container">
                <h4>All Songs</h4>
                    {
                        currentSongs && currentSongs.map((song : Song) =>
                            (
                                <SongFrame song={song} key={song.SongID} />
                            )
                        )
                    }
                <Pagination page={currentPage} totalPages={Math.ceil(songs.length / songsPerPage)} handlePagination={setCurrentPage} />
            </div>
        </div>
    )
}

export default SongList;