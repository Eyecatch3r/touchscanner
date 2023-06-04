import Link from "next/link";

export default function Header(){
    return (
        <div className="flex w-full justify-between m-0">
            <Link href="/" className="m-5">
                <img
                    src="/logo.png"
                    alt="Logo"
                    className="scale-75 sm:scale-100 min-w-max dark:brightness-0 w-20 h-20 dark:invert transition glow duration-500 hover:drop-shadow-[0_7px_11px_rgba(100,100,100,1)]"
                />
            </Link>

            <h2 className="scale-75 sm:scale-100 ml-1 text-2xl font-bold mt-7 flex-shrink-0 overflow-hidden text-center w-44 h-10 rounded border-2 transition glow duration-500 hover:drop-shadow-[0_7px_11px_rgba(100,100,100,5)]">Store Scanner</h2>

            <Link href="/account" className="m-5">
                <img
                    src="/ProfilePic.jpeg"
                    alt="Profile Picture"
                    className="scale-75 sm:scale-100 min-w-max w-20 h-20 rounded-full transition filter duration-500 hover:drop-shadow-[0_7px_11px_rgba(100,100,100,1)]"
                />
            </Link>
        </div>

    );
}