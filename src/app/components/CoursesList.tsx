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
        <div>
            <ul>
            { data && data.map((item: any) => (
                <li key={item.id}>
                    <CourseItem {...item} />
                </li>
            )) 
            }
            </ul>
        </div>
    );
}
