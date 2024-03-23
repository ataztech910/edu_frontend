import CourseItem from "./CourseItem";

async function getData() {
    console.log(`${process.env.API_GATEWAY}/courses?populate=*`);
    const res = await fetch(`${process.env.API_GATEWAY}/courses?populate=*`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function CoursesList() {
    const { data } = await getData();
    console.log(data);
    return (
        <div className="mt-10">
            <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
            { data && data.map((item: any) => (
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md border" key={item.id}>
                    <CourseItem {...item} />
                </div>
            )) 
            }
            </div>
        </div>
    );
}
