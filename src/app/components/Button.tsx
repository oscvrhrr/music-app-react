

interface ButtonProps {
    text: string,

}

export default function Button (props: ButtonProps) {
    return (
       <button className="bg-white/10 p-1 px-2.5 m-1 rounded-xl text-white text-sm " >
        {props.text}
       </button>



    )


};