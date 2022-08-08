import http from "../http-common";

class SongsService
{
	getAllSongs()
	{
		return http.get("/songs");
	}
	
	getSong(id) 
	{
		return http.get(`/songs/songid/${id}`);
	}

	getSongsByTitle(songtitle) 
	{
    	return http.get(`/songs/songtitle/${songtitle}`);
    }

	getSongsByArtistName(artistname)
	{
		return http.get(`/songs/artistname/${artistname}`);
	}
	
	getSongsByArtistId(artistid)
	{
		return http.get(`/songs/artistname/${artistid}`);
	}

	getAllArtists()
	{
		return http.get("/artists");
	}
	
	getArtist(id) 
	{
		return http.get(`/artists/artistid/${id}`);
	}

	getArtistsByName(artistname) 
	{
    	return http.get(`/artists/artistname/${artistname}`);
    }

	getChart(chartno)
	{
		return http.get(`/charts/${chartno}`);
	}

	getChartRun(songid)
	{
		return http.get(`/charts/songid/${songid}`);
	}

	/* not added to NestJS server yet */
	getChartDates()
	{
		return http.get(`/chartdates`);
	}

	getChartDate(chartno)
	{
		return http.get(`/chartdates/${chartno}`);
	}

}

export default new SongsService()