import Image from "next/image"


interface Playlist {
    name: string,
    image: string
}

export function PlaylistItem ({ playlist }: { playlist: Playlist}) {

    

    const { name, image } = playlist;

    return (
        <div>
            <Image
                src={playlist.image}
                alt="Playlist cover"
                height={30}
                width={30}
            />
            <p>{playlist.name}</p>
            <p></p>
        </div>
    )
}