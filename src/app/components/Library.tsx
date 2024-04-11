import Image from "next/image"
import Shelf from '../../../assets/library-icon.png'



export default function Library () {
    return (
        
        <aside className="w-80 bg-zinc-900 rounded-md ml-2">
            <li className="flex items-center mx-6 py-3">
                <Image
                    src={Shelf}
                    width={30}
                    height={30}
                    alt="Icon of library"
                />
                <p>Your Library</p>
            </li>

        </aside>
    )
}