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
    <main className="">
        <Link href={'/'}>Back to list</Link>
        <h1>Welcome to the Course</h1>
        <div>
            <Image 
                width={500}
                height={500}
                alt={data.attributes.Title}
                src={`${process.env.IMAGE_API_GATEWAY}${data.attributes.Icon.data.attributes.formats.small.url}`} />
        </div>
        <div>
            {data.attributes.Title}
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.attributes.Description }} />
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
    </main>
  );
}
