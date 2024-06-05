import Navbar from "./components/Navbar"
import Library from "./components/Library"
import AlbumShowcase from "./components/AlbumShowcase"
import CoverDisplay from "./components/CoverDisplay"
import MusicPlayer from "./components/MusicPlayer"


export default function Home() {
  return (
    <>
      <div className="grid grid-cols-[20.55rem_48.75rem_19.5rem] grid-rows-none p-2 h-[48.5rem]">
        <div className="grid grid-rows-[7.5rem_46.5rem] h-[40rem]">
        <Navbar/>
        <Library/>
        </div>
        <AlbumShowcase/>
        <CoverDisplay/>
        <MusicPlayer/>
      </div>
    </>
  )
}
