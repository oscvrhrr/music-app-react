"use client"
import Image from "next/image"
import Shelf from '/public/assets/library-icon.png'
import { PlaylistItem } from "./PlaylistItem"
import { Playpen_Sans } from "next/font/google";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";




export default function Library () {
    const [playlists, setPlaylists] = useState([])
    const [accessToken, setAccessToken] = useState<string | null>(null);

    useEffect(() => {
        const getSession = async () => {
          const { data: { session } } = await supabase.auth.getSession();
          const token = session?.access_token;
          setAccessToken(token || null);
        };
    
        getSession();
      }, []);
    
      useEffect(() => {
        const fetchPlaylist = async () => {
          if (!accessToken) return;
          
          const response = await fetch('https://api.spotify.com/v1/browse/featured-playlists?limit=10', {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
          });
          
          const playlist = await response.json();
          setPlaylists(playlist);
          console.log(playlist);
          console.log(accessToken)
        };
    
        fetchPlaylist();
      }, [accessToken]);


    
    return (
        
        <aside className="w-80 h-[40rem] bg-zinc-900 rounded-md col-start-1">
            <li className="flex items-center mx-6 py-3">
                <Image
                    src={Shelf}
                    width={30}
                    height={30}
                    alt="Icon of library"
                />
                <p>Your Library</p>
            </li>
            <ul>
                {/* {playlists.map((item, index) => (
                    <h1 key={index}>{item}</h1>
                ))} */}
               
            </ul>


        </aside>
    )
}