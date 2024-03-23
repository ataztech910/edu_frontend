import Image from "next/image";
import Link from "next/link";

export default function CourseItem(props: any) {
  return (
    <Link href={`/course/${props.id}`}>
        <div>
            <Image 
                width={156}
                height={156}
                alt={props.attributes.Title}
                src={`${process.env.IMAGE_API_GATEWAY}${props.attributes.Icon.data.attributes.formats.thumbnail.url}`} />
        </div>
        <div>
            {props.attributes.Title}
        </div>
    </Link>
  );
}
