import httpCommon from "../http-common";
import http from "../http-common";

class SongsService
{
	getAllSongs()
	{
		return http.get("/songs");
	}
	
	getSong(id:number) 
	{
		return http.get(`/songs/songid/${id}`);
	}

	getSongsByTitle(songtitle:string) 
	{
    	return http.get(`/songs/songtitle/${songtitle}`);
    }

	getSongsByArtistName(artistname:string)
	{
		return http.get(`/songs/artistname/${artistname}`);
	}
	
	getSongsByArtistId(artistid:number)
	{
		return http.get(`/songs/artistid/${artistid}`);
	}

	getAllArtists()
	{
		return http.get("/artists");
	}
	
	getArtist(id:number) 
	{
		return http.get(`/artists/artistid/${id}`);
	}

	getArtistsByName(artistname:string) 
	{
    	return http.get(`/artists/artistname/${artistname}`);
    }

	getChart(chartno:number)
	{
		return http.get(`/charts/chartno/${chartno}`);
	}

	getChartRun(songid:number)
	{
		return http.get(`/charts/songid/${songid}`);
	}

	getChartDates()
	{
		return http.get(`/chartdates`);
	}

	getChartDate(chartno:number)
	{
		return http.get(`/chartdates/${chartno}`);
	}

	getLatestChartdate()
	{
		return http.get(`chartdates/latest`);
	}

	getLatestChartNo()
	{
		return http.get<[{latest:number}]>(`charts/latest`);
	}

}

export default new SongsService()