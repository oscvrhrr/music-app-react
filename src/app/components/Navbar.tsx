import Image from "next/image"
import Home from '../../../assets/home-icon.png'
import Search from '../../../assets/search-icon.png'

export default function Navbar () {
    return (
        <nav className="w-80 h-28 bg-zinc-900 rounded-md m-2 flex flex-col justify-evenly">
            <ul>
                <li className="flex items-center mx-6 mb-5 ">
                    <Image
                        src={Home}
                        width={30}
                        height={30}
                        alt="Icon of Home"
                    />
                    <p className="mx-3">Home</p>
                </li>
                <li className="flex items-center mx-6 mt-3">
                    <Image
                        src={Search}
                        width={30}
                        height={30}
                        alt="Icon of Search"
                    />
                    <p className="mx-3">Search</p>
                </li>
            </ul>
        </nav>
    )
}