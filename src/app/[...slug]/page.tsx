import { notFound } from "next/navigation";
import PageRenderer from "@/components/page-renderer";

export default async function DynamicPage({ params }: any) {
  const paramData = await params;
  const slugArray = paramData?.slug || [];
  const path = slugArray.join('/');
  const categories = ['music', 'art', 'fashion', 'film', 'travel'];

  if (!categories.includes(slugArray[0])) {
    notFound();
  }

  return <PageRenderer type={slugArray?.length > 1 ? 'post' : 'category'} path={path} data={{category: slugArray[0], slug: slugArray[1]}} />;
}
