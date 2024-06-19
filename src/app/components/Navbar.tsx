import Link from "next/link";

export function Navbar() {
 
  return (
    <div className="px-10 sticky top-4 z-50">
      <div className="mx-auto container">
        <nav className="block w-full max-w-screen-2xl rounded-xl px-8 shadow-md backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border-white/80 bg-white z-50 mt-6 relative border-0 pr-3 py-3 pl-6">
            <div className="flex items-center justify-between">
                <Link href={'/'} className="block antialiased font-sans text-blue-gray-900 text-lg font-bold">EduClass</Link>
                <ul className="ml-10 hidden items-center gap-8 lg:flex">
                    <li>Course</li>
                    <li>Account</li>
                    <li>Blog</li>
                </ul>
                <div className="hidden items-center gap-4 lg:flex">
                    <Link href={'/auth'}>Login</Link>
                </div>
            </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
