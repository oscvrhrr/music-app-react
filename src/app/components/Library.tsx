import Image from "next/image"
import Shelf from '../../../assets/library-icon.png'
import { PlaylistItem } from "./PlaylistItem"
import Data from '../data/playlists.json'
import { Playpen_Sans } from "next/font/google";




export default function Library () {



    const listOfPlayList = Data.playlists.items;

    
    return (
        
        <aside className="w-80 h-screen bg-zinc-900 rounded-md ml-2 ">
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
                {/* { listOfPlayList.forEach((item) => (
                    <PlaylistItem product={item}/>
                )) } */}
            </ul>


        </aside>
    )
}