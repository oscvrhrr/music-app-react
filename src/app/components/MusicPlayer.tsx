import { Play } from "next/font/google"
import PlayerControls from "./PlayerControls"



export default function MusicPlayer () {
    return (
        <div className="w-screen absolute bottom-0 bg-black h-20 flex justify-center">
            <PlayerControls/>
            
        </div>
    )


};