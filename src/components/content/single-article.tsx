import Image from 'next/image'
import Link from 'next/link';

export default function SingleArticle({ article, index }: any) {
  return (
    <div className={`${index % 2 === 0 ? 'md:flex-row rounded-l-md' : 'md:flex-row-reverse rounded-r-md'} w-full h-[90vh] bg-gray flex items-center justify-between gap-5 md:bg-gray-100 mb-5`}>
      <Link
        className={'md:w-1/2 w-full h-full flex md:flex-col flex-col-reverse justify-center gap-4 md:gap-0 md:px-2'}
        href={`/${article.category}/${article.slug}`}
      >
        <div className={`${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} flex flex-col md:gap-5 gap-4 px-4 pb-4 md:p-0`}>
          <p className='border-b font-secondary text-sm uppercase font-bold w-fit -mt-10'>{article.category}</p>
          <h1 className={`${index % 2 === 0 ? 'md:text-end' : 'md:text-start'} md:text-4xl text-xl font-secondary uppercase font-bold md:text-end leading-[25px] md:leading-[40px]`}>{article.title}</h1>
            <div key={index} className="flex flex-col md:items-end gap-1">
              <p className={`${index % 2 === 0 ? 'md:pl-24 md:text-end' : 'md:pl-0 md:text-start'} md:text-sm text-xs pl-0 text-[#333] tracking-normal font-secondary`}>
                {article.excerpt}
              </p>
            </div>
          <p className='font-secondary text-xs font-semibold border-b pb-[2px] w-fit'>KEEP READING</p>
        </div>
        <div className='w-full h-full block md:hidden relative'>
          <Image src={article.cover?.url} alt={article?.title} fill quality={100} className=" w-full h-full object-contain rounded-t-sm" />
        </div>
      </Link>
      <div className='w-1/2 h-full hidden md:block relative'>
        <Image src={article.cover?.url} alt={article?.title} fill quality={100} className={`${index % 2 === 0 ? 'rounded-r-md' : 'rounded-l-md'} w-full h-full object-contain shadow-lg`} />
      </div>
    </div>
  );
}
