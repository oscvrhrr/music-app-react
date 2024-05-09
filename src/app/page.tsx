import Navbar from "./components/Navbar"
import Library from "./components/Library"
import AlbumShowcase from "./components/AlbumShowcase"

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-[20.6875rem_48.75rem_17.5rem] grid-rows-none p-2 h-[48.5rem]">
        <div className="grid grid-rows-[7.5rem_46.5rem] h-[40rem]">
        <Navbar/>
        <Library/>
        </div>
        <AlbumShowcase/>
      </div>

    </>
  )
}
