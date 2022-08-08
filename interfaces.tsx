export interface Song {

    SongID : number;
    ArtistID : number;
    ArtistName : string;
    SongTitle : string;
}

export interface Artist {
    ArtistID : number;
    ArtistName : string;
}

export interface Chart {
    ChartID : number;
    ArtistID : number;
    SongID: number;
    ChartNo : number;
    ChartPos : number;
    ArtistName : string;
    SongTitle : string;
}