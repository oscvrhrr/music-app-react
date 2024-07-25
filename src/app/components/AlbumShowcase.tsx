"use client"
import Button from "./Button"
import signOut from "../lib/signout"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { getProviderToken } from "../lib/userdata";
import LastPlay from "./LastPlay"

interface Artist {
    name: string;
    images: { url: string }[];
}


export default function AlbumShowcase () {
    const [artists, setArtists] = useState<Artist[]>([]);
    const router = useRouter();
    const BASE_URL = "https://api.spotify.com";
    
    useEffect(() => {
        const getBearer = async() => {
            const bearer: string | null = await getProviderToken()
            const data = await fetch(`${BASE_URL}/v1/artists/?ids=0XwVARXT135rw8lyw1EeWP,5mOO1KIfKb5HY8ieKjG9Qf,0elWFr7TW8piilVRYJUe4P,2h93pZq0e7k5yf4dywlkpM,4FAahCBNlbpgoAhVfuUHPD,20wkVLutqVOYrc0kxFs7rA,21mKp7DqtSNHhCAU2ugvUw,4q3ewBCX7sLwd24euuV69X`, {
                method: 'GET',
                headers: {
                    'Authorization': ` Bearer ${bearer}`
                }
            });
            const response = await data.json().then(json => {
                return json;
            })
            setArtists(response.artists)
            
        }
        getBearer()
        
    }, [])
    
    console.log(artists)
    const handleSignOut = async () => {
        const success:any = await signOut();
        if (success) {
            router.push("/");
        } else {
            console.error("Sign out failed");
        }
    }

    return (
        <main className="bg-zinc-900 w-[48.75rem] h-full inline-block rounded-md col-start-2 row-start-1">
            <header className="bg-violet-800 rounded-t-md h-28 flex items-end p-3">

                <div>
                    <Button text="All"/>
                    <Button text="Music"/>
                    <Button text="Podcast"/>
                    <Button text="Audiobooks"/>
                </div>
                    <button onClick={handleSignOut}>Sign Out</button>
            </header>
            <div className="flex m-auto px-2">
                <div className="flex flex-wrap">
                   {
                    artists.map((artist,index) => (
                        <LastPlay
                            key={index}
                            name={artist.name}
                            image={artist.images[2].url}
                        />
                    ))
                   }
                </div>
                <div>
                   
                </div>
            </div>


        </main>

    )
};