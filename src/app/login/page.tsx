import { signInWithSpotify } from "../lib/auth";

export default function Login() {
  return (
    <div className="flex justify-center mt-60">
      <div className="w-80 h-96 bg-zinc-800 rounded text-center flex flex-col p-8  ">
        <button
          onClick={signInWithSpotify}
          className="block bg-violet-800 rounded m-1 p-1"
        >
          Log In
        </button>
      </div>
    </div>
  );
}
