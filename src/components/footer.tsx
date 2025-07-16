"use client";
import Image from "next/image";
import { InstagramLogoIcon, XLogoIcon, YoutubeLogoIcon, TiktokLogoIcon } from "@phosphor-icons/react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className='bg-black'>
      <div className="md:h-[40vh] h-[20vh] flex flex-col items-center justify-center">
        <div className="md:w-[20%] w-[40%]">
          <Image
            src='/asset/logo-white.png'
            alt='white logo'
            width={400}
            height={400}
            layout='responsive'
            className='object-cover'
          />
        </div>
        <p className="text-white md:text-base text-xs mt-3 font-secondary capitalize font-semibold">Where The culture cuts deep!</p>
        <div className="grid grid-cols-4 gap-2 items-center mt-2">
            <Link href={`https://www.instagram.com/thesectionhq/`} target="_blank">
              <InstagramLogoIcon color="#fff" size={30} />
            </Link>
            <Link href={`https://x.com/thesectionhq`} target="_blank">
              <XLogoIcon color="#fff" size={30} />
            </Link>
            <Link href={`https://www.youtube.com/@thesectionhq`} target="_blank">
              <YoutubeLogoIcon color="#fff" size={30} />
            </Link>
            <Link href={`https://www.tiktok.com/@thesectionhq`} target="_blank">
              <TiktokLogoIcon color="#fff" size={30} />
            </Link>
        </div>
      </div>
      <footer className="bg-white h-[5vh] md:px-20 px-5 flex items-center justify-between font-secondary font-semibold">
        <p className="md:text-base text-xs">Section Studio.</p>
        <p>developed by penuel</p>
        <a href="mailto:hello@thesectionhq.com" className="md:text-base text-xs">hello@thesectionhq.com</a>
      </footer>
    </div>
  );
}
