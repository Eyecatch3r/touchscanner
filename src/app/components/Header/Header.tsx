import Link from "next/link";

export default function Header(){
    return (
        <div className="flex w-full justify-between m-0">
            <div className="flex items-center">
                <Link href="/" className="m-5 mr-0">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="md:w-20 md:h-20 w-14 h-14 dark:brightness-0 dark:invert transition glow duration-500 hover:drop-shadow-[0_7px_11px_rgba(100,100,100,1)]"
                    />
                </Link>
                <h2 className="text-base md:text-xl font-bold ml-0 p-0 mb-3 md:mb-5">Store Scanner</h2>
            </div>
            
            <Link href="/account" className="m-5">
                <img src="/ProfilePic.jpeg"
                    alt="Profile Picture"
                    className="md:w-20 md:h-20 w-14 h-14 rounded-full transition filter duration-500 hover:drop-shadow-[0_7px_11px_rgba(100,100,100,1)]"
                />
            </Link>
        </div>

    );
}