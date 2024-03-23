import BackButton from "@/app/components/BackButton";

async function getData(slug: string) {
  console.log(`${process.env.API_GATEWAY}/lessons/${slug}?populate=*`);
  const res = await fetch(`${process.env.API_GATEWAY}/lessons/${slug}?populate=*`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
export default async function Lesson({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const { data } = await getData(slug);
  return (
    <main className="">
        <BackButton />
        <h1>
          {data.attributes.Title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: data.attributes.Text }} />
    </main>
  );
}
