'use client'
import Link from "next/link";
import { useSpring} from '@react-spring/web';
import {animated} from "@react-spring/web";

export default function Page() {
  const [props, api] = useSpring(
      () => ({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 500 }
      }),
      []
  )
  return (
      <main className="h-screen">
        <animated.div  style={props} className="flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="max-w-md w-full p-6 g-blur bg-opacity-70 backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-lg text-gray-800 dark:text-white">
            <div className="flex flex-col items-center justify-center mb-6">
              <h2 className="text-xl font-bold">
                User Profile
              </h2>
              <hr className="w-full border-t border-darkTextSecondary" />
              <img
                  src="/ProfilePic.jpeg"
                  alt="Profile Picture"
                  className="w-20 h-20 rounded-full my-4"
              />
              <h2 className="text-xl font-bold">
                Email
              </h2>
              <p className="text-gray-500">Hasbula@gmail.com</p>
              <button className="bg-darkCard text-whiteCard dark:bg-whiteCard dark:text-darkCard font-bold py-1 px-8 mt-4 rounded focus:outline-none">
                Logout
              </button>
              <button className="bg-darkCard text-whiteCard dark:bg-whiteCard dark:text-darkCard font-bold py-1 px-8 mt-4 rounded focus:outline-none">
                Delete Account
              </button>
              <h2 className="text-xl font-bold mt-4">
                Seller Settings
              </h2>
              <hr className="w-full border-t border-darkTextSecondary" />
              <Link href="/manageProducts">
                <button className="bg-darkCard text-whiteCard dark:bg-whiteCard dark:text-darkCard font-bold py-1 px-8 mt-4 rounded focus:outline-none">
                  Manage Products
                </button>
              </Link>
            </div>
          </div>
        </animated.div>
      </main>
  )
}
