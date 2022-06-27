import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { logout, loading } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    // listen to scroll and call function
    window.addEventListener('scroll', handleScroll)
    // clean up function this means the function will run
    // only on
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header className={`${isScrolled && 'bg-[#141414] '}`}>
      {/* by default tailwind styling is mobile responsive */}
      <div className="flex items-center space-x-2 md:space-x-10">
        {/* to use svg image simpliy used this img */}
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        {/* ul>li*5 */}
        <ul className="hidden space-x-4 md:flex">
          {/* custom css class got to global css */}
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        {/* using heroicons design by tailwindcss and react icons */}
        <SearchIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <img
            onClick={logout}
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  )
}
export default Header
