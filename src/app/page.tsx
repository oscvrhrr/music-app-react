import Navbar from "./components/Navbar"
import Library from "./components/Library"
import AlbumShowcase from "./components/AlbumShowcase"

export default function Home() {
  return (
    <>
      <div className="grid-cols-3">
        <Navbar/>
        <Library/>
        <AlbumShowcase/>
      </div>

    </>
  )
}
