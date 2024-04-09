import { Metadata } from "next";
import Image from "next";
import DefaultLayout2 from "@/components/Layouts/DefaultLayout2";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Hostel Admin Dashboard | HostelAdmin - Administration for the hostel",
  description: "This is website for Admin Dashboard",
};
export default function Home() {
  return (
    <DefaultLayout2>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Login Page  " />
        <div className="grid grid-cols-2 gap-1">
<div className="p-1">  
<div className="rounded overflow-hidden shadow-lg bg-boxdark rounded-xl">
  <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M874.666667 42.666667a21.333333 21.333333 0 0 0-21.333334-21.333334H170.666667a21.333333 21.333333 0 0 0-21.333334 21.333334v213.333333h725.333334V42.666667z" fill="#727272"></path><path d="M917.333333 234.666667H106.666667a85.333333 85.333333 0 0 0-85.333334 85.333333v426.666667a42.666667 42.666667 0 0 0 42.666667 42.666666h149.333333a21.333333 21.333333 0 0 0 21.333334-21.333333h554.645333a21.333333 21.333333 0 0 0 21.333333 21.333333H960a42.666667 42.666667 0 0 0 42.666667-42.666666V320a85.333333 85.333333 0 0 0-85.333334-85.333333z" fill="#444444"></path><path d="M874.666667 789.333333H149.333333V533.333333a21.333333 21.333333 0 0 1 21.333334-21.333333h682.666666a21.333333 21.333333 0 0 1 21.333334 21.333333v256z" fill="#232323"></path><path d="M192 554.666667v426.666666a21.333333 21.333333 0 0 0 21.333333 21.333334h597.333334a21.333333 21.333333 0 0 0 21.333333-21.333334V554.666667H192z" fill="#E6E6E6"></path><path d="M885.333333 373.333333m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#72C472"></path><path d="M682.666667 682.666667H341.312a21.333333 21.333333 0 1 1 0-42.666667H682.666667a21.333333 21.333333 0 1 1 0 42.666667zM682.666667 789.333333H341.312a21.333333 21.333333 0 1 1 0-42.666666H682.666667a21.333333 21.333333 0 1 1 0 42.666666zM511.978667 896h-170.666667a21.333333 21.333333 0 1 1 0-42.666667h170.666667a21.333333 21.333333 0 1 1 0 42.666667z" fill="#B3B3B3"></path></g></svg>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2"> Technician </div>

    <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Login as Technician
            </Link>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
</div>
<div className="p-1">  
<div className="max-w-sm rounded overflow-hidden shadow-lg bg-boxdark rounded-xl">
<svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M579.8 289.5l-42-169.2L389 143.7c-9.8 1.5-18.9-5.1-20.5-14.9l-2.2-14c-1.5-9.8 5.1-18.9 14.9-20.5L556 66.9c10.8-1.7 21.2 5.2 23.8 15.8l48.4 194.8c2.4 9.6-3.5 19.3-13.1 21.7l-13.7 3.4c-9.5 2.4-19.3-3.5-21.6-13.1z" fill="#656666"></path><path d="M240.7 749.9m-176.5 0a176.5 176.5 0 1 0 353 0 176.5 176.5 0 1 0-353 0Z" fill="#FF9D00"></path><path d="M164.2 601.3c28.6 14.4 59.3 20.3 89.1 18.7-4.1-60.1-38.9-116.6-96.6-145.7-28.6-14.4-59.3-20.3-89.1-18.7 4.1 60.2 38.9 116.6 96.6 145.7z" fill="#02BA4D"></path><path d="M860.4 926.9H542.6c-18 0-32.9-12.3-34.5-28.3l-60-601.7c-0.7-7.4 5.8-13.9 14.2-13.9h479.2c8.4 0 14.9 6.5 14.1 13.9l-63.4 604c-1.5 14.7-15.3 26-31.8 26z" fill="#00AAFF"></path></g></svg>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2"> Food Park</div>

    <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Login to Food Park
            </Link>
  </div>
  
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
</div>
<div className="p-1">  
<div className="max-w-sm rounded overflow-hidden shadow-lg bg-boxdark rounded-xl">
<svg viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>996</title> <defs> </defs> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g transform="translate(1.000000, 0.000000)" fill="#5ab8dd"> <path d="M15.031,0.042 L0.031,0.042 L0.031,3.042 L15.031,3.042 L15.031,0.042 L15.031,0.042 Z M2,1.958 L1,1.958 L1,0.958 L2,0.958 L2,1.958 L2,1.958 Z M4,1.958 L3,1.958 L3,0.958 L4,0.958 L4,1.958 L4,1.958 Z" class="si-glyph-fill"> </path> <path d="M0.0209999999,3 L0.0209999999,16 L14.979,16 L14.979,3 L0.0209999999,3 L0.0209999999,3 Z M7.45749509,15 C4.41959789,15 1.957,12.5373869 1.957,9.50049252 C1.957,6.46261306 4.41860771,4 7.45749509,4 C10.4944021,4 12.957,6.46261306 12.957,9.50049252 C12.9560098,12.5373869 10.4944021,15 7.45749509,15 L7.45749509,15 Z" class="si-glyph-fill"> </path> <path d="M7.516,5.083 C5.063,5.083 3.075,7.062 3.075,9.499 C3.075,11.937 5.063,13.917 7.516,13.917 C9.97,13.917 11.958,11.938 11.958,9.499 C11.958,7.062 9.97,5.083 7.516,5.083 L7.516,5.083 Z M10.799,10.028 C10.878,10.028 10.949,10.007 11.017,9.98 C10.782,11.696 8.827,11.236 7.516,10.017 C5.985,8.593 3.979,11.442 3.979,9.498 C3.979,7.558 5.563,5.982 7.516,5.982 C9.305,5.982 10.782,7.303 11.017,9.018 C10.95,8.99 10.878,8.97 10.799,8.97 C10.507,8.97 10.269,9.207 10.269,9.497 C10.269,9.79 10.507,10.028 10.799,10.028 L10.799,10.028 Z"> </path> </g> </g> </g></svg>
  <div className="px-6 py-4">
    
    <div className="font-bold text-xl mb-2">  Chotta Dhobi </div>
  
    <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Login to Chotta dhobi
            </Link>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
</div>
</div>
      </div>
    </DefaultLayout2>
  );
};

