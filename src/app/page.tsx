// import Image from "next/image";
import CoursesList from "./components/CoursesList";

export default function Home() {
  return (
    <div className="container mx-auto mb-24 text-center">
        <h1 className="mt-8 block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900">Courses list</h1>
        <CoursesList  />
    </div>
  );
}
