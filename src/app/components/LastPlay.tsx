import Image from "next/image"





type LastPlayProps = {
    name: string;
    image: string;
}

export default function LastPlay ({name, image}:LastPlayProps) {
    
return (
    <>
        <div className="w-[22.875rem] h-12 rounded flex items-center bg-[#ffffff0d] m-1">
            <Image
            src={image}
            alt="artist image"
            height={50}
            width={50}
            className="rounded"
            />
            <div>
            {name}
            </div>

            <button></button>
        </div>
    </>
)
};