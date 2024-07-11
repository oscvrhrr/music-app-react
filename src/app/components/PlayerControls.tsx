import Image from "next/image"



const svgPaths = {
    rewind: "../../../assets/rewind-icon.svg",
    forward: "/assets/forward-icon.svg",
    play: "/assets/play-icon.svg", 
    pause:  "/assets/pause-icon.svg"
}


export default function PlayerControls () {
    return (
        <div>
            <div className="flex my-1">
                <Image src={svgPaths.rewind} width={25} height={25} alt="rewind" />
                <Image src={svgPaths.play} width={50} height={50} alt="play" className="mx-1" />
                <Image src={svgPaths.forward} width={25} height={25} alt="forward" />
            </div>
            <div>
                meter
            </div>
        </div>
    )
};