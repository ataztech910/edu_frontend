import BackButton from "@/app/components/BackButton";
import Image from "next/image";
import Answer from "@/app/components/Answer";

async function getData(slug: string) {
  const res = await fetch(`${process.env.API_GATEWAY}/chats/${slug}?populate=*`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
export default async function Trainig({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const { data } = await getData(slug);
  return (
    <main className="">
        <BackButton />
        <h1>{data.attributes.Title}</h1>
        <div className="flex">
            <div>
            <Image 
                width={158}
                height={156}
                alt={data.attributes.Title}
                src={`${process.env.IMAGE_API_GATEWAY}${data.attributes.Avatar.data.attributes.formats.thumbnail.url}`} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: data.attributes.Question }} />
        </div>
        <div className="mt-8">
            <Answer answers={data.attributes.Answer} />
        </div>
    </main>
  );
}
