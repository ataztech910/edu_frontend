'use client';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter()

  return (
    <button onClick={() => router.back()} className="my-6 text-base  rounded-r-none focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
    hover:bg-gray-200  
    bg-gray-100 
    text-gray-700 
    border duration-200 ease-in-out 
    border-gray-600 transition">
            <div className="flex leading-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-left w-5 h-5">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                Back</div>
        </button>
  )
}