import { useState, useEffect } from "react"
import { getProviderToken } from "../lib/userdata";



export function PlaylistItem () {
    const [playlists, setPlaylist] = useState([]);
    const BASE_URL = "https://api.spotify.com";
    
    useEffect(() => {
        const bearer = getProviderToken();
        const fetchPlaylists = async() => {
            const data = await fetch(BASE_URL, {
                headers: {
                    'Authorization': `Bearer ${bearer}`
                }
            })
        }
    
        
       
    }, []);

   
    


    return (
        <div>
            {/* hello */}

        </div>
    )
}