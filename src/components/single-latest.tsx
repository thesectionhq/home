import Image from "next/image";
import Link from "next/link";


export default async function Single() {
  return (
    <div className=" bg-[#847ba2] text-white w-full">
      <div className="container mx-auto w-full flex flex-col md:flex-row md:gap-4 items-center justify-between p-4 py-8 md:px-8">

        <div className="md:w-1/2 w-full h-[500px]  flex  justify-center">
          <iframe data-testid="embed-iframe" style={{ borderRadius: 12 }} src="https://open.spotify.com/embed/playlist/78v0OtZnmin00wYBGTjMWW?utm_source=generator&theme=0" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>

        <div className="md:w-1/2 w-full md:border-l ">
          <h1 className="md:text-lg py-5 md:pl-5 border-b md:w-[50%] text-base uppercase leading-[18px] md:leading-[20px]">What we've be listening to</h1>

          <p className='text-base pt-3 md:pl-5 leading-[19.5px] md:w-[60%] font-secondary'>A curated playlist of artists you should look out for</p>
        </div>
      </div>
    </div>
  )
}
