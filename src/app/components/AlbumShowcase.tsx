"use client"
import Button from "./Button"
import LastPlay from "./LastPlay"
import signOut from "../lib/signout"
import { useRouter } from "next/navigation"


export default function AlbumShowcase () {
    const router = useRouter();

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
            <div className="flex px-2">
                <div>
                    <LastPlay/>
                    <LastPlay/>
                    <LastPlay/>
                    <LastPlay/>
                </div>
                <div>
                    <LastPlay/>
                    <LastPlay/>
                    <LastPlay/>
                    <LastPlay/>
                </div>
            </div>


        </main>

    )
};