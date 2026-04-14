import Image from 'next/image';
import facebookImg from '../../../public/facebook.png'
import instagramImg from '../../../public/instagram.png'
import twitterImg from '../../../public/twitter.png'
import footerLogo from '../../../public/logo-xl.png'
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {

    return (
        <div className='bg-green-900'>
            <div className='flex flex-col space-y-4 py-20 w-11/12 mx-auto text-center text-white items-center'>
                <Image src={footerLogo} width={300} height="auto" alt='Footer-Logo'></Image>
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className="font-semibold text-xl">Social Links</p>
                <ul className='flex gap-2 items-center'>
                    <li><Image src={instagramImg} width={30} height="auto" alt='instagram-Icon'></Image></li>
                    <li><Image src={facebookImg} width={30} height="auto" alt="facebook-Icon"></Image></li>
                    <li><Image src={twitterImg} width={30} height="auto" alt='twitter-Icon'></Image></li>
                </ul>
                <hr className='mt-7 w-full' />
                <div className='flex justify-between items-center w-full'>
                    <div className='flex gap-1 items-center'>
                        <span><FaRegCopyright /></span>
                        <p>2026 KeenKeeper. All rights reserved.</p>
                    </div>
                    <div>
                        <ul className='flex gap-1 md:gap-4 items-center'>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms of Service</a></li>
                            <li><a href="">Cookies</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;