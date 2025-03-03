import React, { useEffect } from "react";
import songsService from "../services/songsService";
import { useRouter } from "next/router";

const Chart = () => {
    const router = useRouter();
    useEffect(() => {
        songsService.getLatestChartNo().then(response => 
            {console.log(response.data[0].latest);
            router.push(`chart/${response.data[0].latest}`)}
        )
    }, []);
    
    return null;
}

export default Chart;
