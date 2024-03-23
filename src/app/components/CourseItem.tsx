import Image from "next/image";
import Link from "next/link";

export default function CourseItem(props: any) {
  return (
    <Link href={`/course/${props.id}`}>
        <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg -mt-6 h-64">
            <Image 
                width={500}
                height={500}
                alt={props.attributes.Title}
                src={`${process.env.IMAGE_API_GATEWAY}${props.attributes.Icon.data.attributes.formats.small.url}`} />
        </div>
        <div className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-inherit mb-2 normal-case">
            {props.attributes.Title}
        </div>
    </Link>
  );
}
