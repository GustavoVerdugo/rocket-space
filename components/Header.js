import Image from 'next/image';
import Link from 'next/link'
import * as FaIcons from 'react-icons/fa';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faRocket, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import HeaderIcon from './HeaderIcon';
import * as serviceRocket from '../services/rocket'

const Header = () => {
    const [active, setActive] = useState(false);
    const [activeDrop, setActiveDrop] = useState(false);
    const [selected, setSelected] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };
    const handleClickDrop = () => {
        setActiveDrop(!activeDrop);
    };
    const handleClickNav = () => {
        setSelected(!selected);
    }
    return (
        <nav className="sticky top-0 bg-black shadow-lg p-2 lg:px-5 z-50 xl:max-h-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <Link href='/' passHref={true}>
                                <a className="flex items-center py-4 px-2">
                                    <Image src="https://bryggeri.corelabs.cl/wp-content/uploads/2021/10/rocket-space-logo.png" width={40} height={40} layout="fixed" />
                                </a>
                            </Link>
                        </div>
                        <div className="hidden md:flex items-center space-x-1">
                            <Link href='/' passHref={true}>
                                <div className="flex md:hover:bg-gray-800 rounded-xl text-white transition duration-300 active:border-b-4 border-gray-700">
                                    <a href="" className="py-4 px-2 text-white font-semibold">Inicio</a>
                                </div>
                            </Link>
                            <div className="flex md:hover:bg-gray-800 rounded-xl text-white transition duration-300 active:border-b-4 border-gray-700" onClick={handleClickDrop}>
                                <a className="py-4 px-2 text-white font-semibold">Rockets</a>
                                <div className=" flex items-center cursor-pointer md:px-1 sm:h-14 group">
                                    <FontAwesomeIcon icon={faChevronDown} className={`${!activeDrop ? 'transform rotate-0 transition duration-200' : 'transform rotate-180 transition duration-200'} text-white sm:h-7 mx-2`} />
                                </div>
                                <ul className={`${activeDrop ? '' : 'hidden'} dropdown-menu absolute text-gray-700 pt-16`}>
                                    <Link href='/rockets' passHref={true}><li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Rockets</a></li></Link>
                                    <Link href='/' passHref={true}><li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Capsules</a></li></Link>
                                    <Link href='/' passHref={true}><li className=""><a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Dragons</a></li></Link>
                                </ul>
                            </div>
                            <Link href='/' passHref={true}>
                                <div className="flex md:hover:bg-gray-800 rounded-xl text-white transition duration-300 active:border-b-4 border-gray-700">
                                    <a href="" className="py-4 px-2 text-white font-semibold">Launches</a>
                                </div>
                            </Link>
                            <Link href='/' passHref={true}>
                                <div className="flex md:hover:bg-gray-800 rounded-xl text-white transition duration-300 active:border-b-4 border-gray-700">
                                    <a href="" className="py-4 px-2 text-white font-semibold">Missions</a>
                                </div>
                            </Link>
                            <div className="flex md:hover:bg-gray-800 rounded-xl text-white transition duration-300 active:border-b-4 border-gray-700" onClick={serviceRocket.getRockets}>
                                <a className="py-4 px-2 text-white font-semibold">Rockets</a>
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center space-x-5">
                        <button className="outline-none mobile-menu-button" onClick={handleClick}>
                            <svg className=" w-6 h-6 text-white hover:text-white"
                                x-show="!showMenu"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${active ? '' : 'hidden'} md:hidden mobile-menu`}>
                <ul>
                    <Link href='/' passHref={true}>
                        <div className="flex md:hover:bg-gray-800 rounded-xl text-white transition duration-300 active:border-b-4 border-gray-700">
                            <a href="index.html" className="block text-sm px-2 py-4 text-white bg-black font-semibold active:bg-gray-700">Inicio</a>
                        </div>
                    </Link>
                    <li className="flex justify-between items-center bg-black" onClick={handleClickDrop}>
                        <a className="block text-sm px-2 py-4 text-white bg-black font-semibold active:bg-gray-700">Rockets</a>
                        <div className=" flex items-center cursor-pointer md:px-1 sm:h-14 group">
                            <FontAwesomeIcon icon={faChevronDown} className={`${!activeDrop ? 'transform rotate-0 transition duration-200' : 'transform rotate-180 transition duration-200'} text-white text-sm h-6 mx-6`} />
                        </div>
                    </li>
                    <li className='flex flex-col items-center' >
                        <ul className={`${activeDrop ? '' : 'hidden'} dropdown-menu block text-gray-700 pt-0`}>
                            <Link href='/rockets' passHref={true}>
                                <div className="flex md:hover:bg-gray-800 rounded-xl text-white transition duration-300 active:border-b-4 border-gray-700">
                                    <a href="index.html" className="block text-sm px-2 py-4 text-white bg-black font-semibold active:bg-gray-700">Rockets</a>
                                </div>
                            </Link>
                            <Link href='/' passHref={true}>
                                <div className="flex md:hover:bg-gray-800 rounded-xl text-white transition duration-300 active:border-b-4 border-gray-700">
                                    <a href="index.html" className="block text-sm px-2 py-4 text-white bg-black font-semibold active:bg-gray-700">Capsules</a>
                                </div>
                            </Link>
                            <Link href='/' passHref={true}>
                                <div className="flex md:hover:bg-gray-800 rounded-xl text-white transition duration-300 active:border-b-4 border-gray-700">
                                    <a href="index.html" className="block text-sm px-2 py-4 text-white bg-black font-semibold active:bg-gray-700">Dragons</a>
                                </div>
                            </Link>
                        </ul>
                    </li>
                    <Link href='/' passHref={true}>
                        <div className="flex md:hover:bg-gray-800 rounded-xl text-white transition duration-300 active:border-b-4 border-gray-700">
                            <a href="index.html" className="block text-sm px-2 py-4 text-white bg-black font-semibold active:bg-gray-700">Launches</a>
                        </div>
                    </Link>
                    <Link href='/' passHref={true}>
                        <div className="flex md:hover:bg-gray-800 rounded-xl text-white transition duration-300 active:border-b-4 border-gray-700">
                            <a href="index.html" className="block text-sm px-2 py-4 text-white bg-black font-semibold active:bg-gray-700">Missions</a>
                        </div>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Header;