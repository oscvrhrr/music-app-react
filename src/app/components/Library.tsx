"use client";
import Image from "next/image";
import Shelf from "/public/assets/library-icon.png";
import { PlaylistItem } from "./PlaylistItem";


export default function Library() {


  return (
    <aside className="w-80 h-[40rem] bg-zinc-900 rounded-md col-start-1">
      <li className="flex items-center mx-6 py-3">
        <Image src={Shelf} width={30} height={30} alt="Icon of library" />
        <p>Your Library</p>
      </li>
      <ul>
        <PlaylistItem/>
      </ul>
    </aside>
  );
}
