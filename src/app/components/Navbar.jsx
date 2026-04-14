'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiHome2Line } from "react-icons/ri";
import { RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {

    const pathName = usePathname();

    return (
        <div className="w-11/12 mx-auto">
            <div className="navbar">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal gap-2 items-center">
                        <li className={
                            pathName === "/"
                                ? "text-white font-semibold bg-green-900 rounded-sm"
                                : ""
                        }><Link href={'/'}>
                                <span><RiHome2Line /></span>
                                <p>Home</p>
                            </Link>
                        </li>
                        <li className={
                            pathName === "/timeLine"
                                ? "text-white font-semibold bg-green-900 rounded-sm"
                                : ""
                        }><Link href={'/timeLine'}>
                                <span><RiTimeLine /></span>
                                <p>TimeLine</p>
                            </Link>
                        </li>
                        <li className={
                            pathName === "/stats"
                                ? "text-white font-semibold bg-green-900 rounded-sm"
                                : ""
                        }><Link href={'/stats'}>
                                <span><TfiStatsUp /></span>
                                <p>Stats</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;