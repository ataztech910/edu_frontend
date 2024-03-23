import BackButton from "@/app/components/BackButton";
import Image from "next/image";
import Link from "next/link";
async function getData(slug: string) {
    console.log(`${process.env.API_GATEWAY}/courses/${slug}?populate=*`);
    const res = await fetch(`${process.env.API_GATEWAY}/courses/${slug}?populate=*`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Course({
  params: { slug },
}: {
  params: { slug: string }
}) {
  console.log(slug);
  const { data } = await getData(slug);
  console.log(data.attributes.lessons.data);
  return (
    <>
      <div className="py-6 col-span-full gap-10 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-4">
          <div>
          <BackButton />
            <div>
                <Image 
                    width={500}
                    height={500}
                    alt={data.attributes.Title}
                    src={`${process.env.IMAGE_API_GATEWAY}${data.attributes.Icon.data.attributes.formats.small.url}`} />
            </div>
          </div>
          <div>
            <div className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-500 mb-4">
                {data.attributes.Title}
            </div>
            <div dangerouslySetInnerHTML={{ __html: data.attributes.Description }} />
          </div>
      </div>
      <div>
        <h2 className="mt-4">Lessons list:</h2>
          <ul>
            { data.attributes.lessons.data && data.attributes.lessons.data.map((item: any) => (
              <li key={item.id}>
                  <Link href={`/lesson/${item.id}`}>
                    {item.attributes.Title}
                  </Link>
              </li>
            )) }
          </ul>
      </div>
    </>
  );
}
