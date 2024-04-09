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
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-3 py-5 grid-cols-2">
          <div className="p-1 h-full">
            <div className="rounded overflow-hidden h-full flex flex-col justify-end shadow-lg bg-boxdark rounded-xl">
              <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M874.666667 42.666667a21.333333 21.333333 0 0 0-21.333334-21.333334H170.666667a21.333333 21.333333 0 0 0-21.333334 21.333334v213.333333h725.333334V42.666667z" fill="#727272"></path><path d="M917.333333 234.666667H106.666667a85.333333 85.333333 0 0 0-85.333334 85.333333v426.666667a42.666667 42.666667 0 0 0 42.666667 42.666666h149.333333a21.333333 21.333333 0 0 0 21.333334-21.333333h554.645333a21.333333 21.333333 0 0 0 21.333333 21.333333H960a42.666667 42.666667 0 0 0 42.666667-42.666666V320a85.333333 85.333333 0 0 0-85.333334-85.333333z" fill="#444444"></path><path d="M874.666667 789.333333H149.333333V533.333333a21.333333 21.333333 0 0 1 21.333334-21.333333h682.666666a21.333333 21.333333 0 0 1 21.333334 21.333333v256z" fill="#232323"></path><path d="M192 554.666667v426.666666a21.333333 21.333333 0 0 0 21.333333 21.333334h597.333334a21.333333 21.333333 0 0 0 21.333333-21.333334V554.666667H192z" fill="#E6E6E6"></path><path d="M885.333333 373.333333m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#72C472"></path><path d="M682.666667 682.666667H341.312a21.333333 21.333333 0 1 1 0-42.666667H682.666667a21.333333 21.333333 0 1 1 0 42.666667zM682.666667 789.333333H341.312a21.333333 21.333333 0 1 1 0-42.666666H682.666667a21.333333 21.333333 0 1 1 0 42.666666zM511.978667 896h-170.666667a21.333333 21.333333 0 1 1 0-42.666667h170.666667a21.333333 21.333333 0 1 1 0 42.666667z" fill="#B3B3B3"></path></g></svg>
              <div className="px-6 py-4 flex flex-col justify-end">
                <div className="font-bold text-xl mb-2"> Technician </div>

                <Link
                  href="tech"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
          <div className="p-1">
            <div className="rounded overflow-hidden h-full flex flex-col justify-end shadow-lg bg-boxdark rounded-xl">
              <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M579.8 289.5l-42-169.2L389 143.7c-9.8 1.5-18.9-5.1-20.5-14.9l-2.2-14c-1.5-9.8 5.1-18.9 14.9-20.5L556 66.9c10.8-1.7 21.2 5.2 23.8 15.8l48.4 194.8c2.4 9.6-3.5 19.3-13.1 21.7l-13.7 3.4c-9.5 2.4-19.3-3.5-21.6-13.1z" fill="#656666"></path><path d="M240.7 749.9m-176.5 0a176.5 176.5 0 1 0 353 0 176.5 176.5 0 1 0-353 0Z" fill="#FF9D00"></path><path d="M164.2 601.3c28.6 14.4 59.3 20.3 89.1 18.7-4.1-60.1-38.9-116.6-96.6-145.7-28.6-14.4-59.3-20.3-89.1-18.7 4.1 60.2 38.9 116.6 96.6 145.7z" fill="#02BA4D"></path><path d="M860.4 926.9H542.6c-18 0-32.9-12.3-34.5-28.3l-60-601.7c-0.7-7.4 5.8-13.9 14.2-13.9h479.2c8.4 0 14.9 6.5 14.1 13.9l-63.4 604c-1.5 14.7-15.3 26-31.8 26z" fill="#00AAFF"></path></g></svg>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"> Food Park</div>

                <Link
                  href="food"
                  className="inline-flex items-center justify-center rounded-full w-full bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Login
                </Link>
              </div>


            </div>
          </div>
          <div className="p-1">
            <div className="rounded overflow-hidden h-full flex flex-col justify-end shadow-lg bg-boxdark rounded-xl">
              <svg viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>996</title> <defs> </defs> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g transform="translate(1.000000, 0.000000)" fill="#5ab8dd"> <path d="M15.031,0.042 L0.031,0.042 L0.031,3.042 L15.031,3.042 L15.031,0.042 L15.031,0.042 Z M2,1.958 L1,1.958 L1,0.958 L2,0.958 L2,1.958 L2,1.958 Z M4,1.958 L3,1.958 L3,0.958 L4,0.958 L4,1.958 L4,1.958 Z" className="si-glyph-fill"> </path> <path d="M0.0209999999,3 L0.0209999999,16 L14.979,16 L14.979,3 L0.0209999999,3 L0.0209999999,3 Z M7.45749509,15 C4.41959789,15 1.957,12.5373869 1.957,9.50049252 C1.957,6.46261306 4.41860771,4 7.45749509,4 C10.4944021,4 12.957,6.46261306 12.957,9.50049252 C12.9560098,12.5373869 10.4944021,15 7.45749509,15 L7.45749509,15 Z" className="si-glyph-fill"> </path> <path d="M7.516,5.083 C5.063,5.083 3.075,7.062 3.075,9.499 C3.075,11.937 5.063,13.917 7.516,13.917 C9.97,13.917 11.958,11.938 11.958,9.499 C11.958,7.062 9.97,5.083 7.516,5.083 L7.516,5.083 Z M10.799,10.028 C10.878,10.028 10.949,10.007 11.017,9.98 C10.782,11.696 8.827,11.236 7.516,10.017 C5.985,8.593 3.979,11.442 3.979,9.498 C3.979,7.558 5.563,5.982 7.516,5.982 C9.305,5.982 10.782,7.303 11.017,9.018 C10.95,8.99 10.878,8.97 10.799,8.97 C10.507,8.97 10.269,9.207 10.269,9.497 C10.269,9.79 10.507,10.028 10.799,10.028 L10.799,10.028 Z"> </path> </g> </g> </g></svg>
              <div className="px-6 py-4">

                <div className="font-bold text-xl mb-2">  Chotta Dhobi </div>

                <Link
                  href="dhobi"
                  className="inline-flex items-center justify-center rounded-full w-full bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Login
                </Link>
              </div>

            </div>
          </div>

          <div className="p-1">
            <div className="rounded overflow-hidden h-full flex flex-col justify-end shadow-lg bg-boxdark rounded-xl">
               <svg viewBox="-102.4 -102.4 1228.80 1228.80" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-102.4" y="-102.4" width="1228.80" height="1228.80" rx="0" fill="#ffffff" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M679.2 839.4h-54.5c-11 0-20-9-20-20v-77.7h94.5v77.7c0 11-9 20-20 20z" fill="#3c4fe0"></path><path d="M522.8 266.4h-31.5c-5.9 0-10.8-4.8-10.8-10.8v-20.3c0-1.5-1.2-2.8-2.8-2.8h-20.3c-5.9 0-10.8-4.8-10.8-10.8v-31.5c0-5.9 4.8-10.8 10.8-10.8h0.4v8h-0.4c-1.5 0-2.8 1.3-2.8 2.8v31.5c0 1.5 1.3 2.8 2.8 2.8h20.3c5.9 0 10.8 4.8 10.8 10.8v20.3c0 1.5 1.3 2.8 2.8 2.8h31.5c1.5 0 2.8-1.3 2.8-2.8v-20.3c0-5.9 4.8-10.8 10.8-10.8h20.3c1.5 0 2.8-1.3 2.8-2.8v-31.5c0-1.5-1.2-2.8-2.8-2.8h-20.3c-5.9 0-10.8-4.8-10.8-10.8v-20.3c0-1.5-1.2-2.8-2.8-2.8h-31.5c-1.5 0-2.8 1.3-2.8 2.8v20.3c0 5.9-4.8 10.8-10.8 10.8h-5.1v-8h5.1c1.5 0 2.8-1.2 2.8-2.8v-20.3c0-5.9 4.8-10.8 10.8-10.8h31.5c5.9 0 10.8 4.8 10.8 10.8v20.3c0 1.5 1.2 2.8 2.8 2.8h20.3c5.9 0 10.8 4.8 10.8 10.8v31.5c0 5.9-4.8 10.8-10.8 10.8h-20.3c-1.5 0-2.8 1.2-2.8 2.8v20.3c0 6-4.9 10.8-10.8 10.8z" fill="#1c71d8"></path><path d="M510.3 581.6c48.1 0 92.1 9.7 130.9 28.9 36.6 18.1 68.4 44.6 94.5 78.7 25.3 33.1 44.9 72.9 58.2 118.3 11.9 40.7 18.5 84.9 19.7 131.6H207c1.2-46.7 7.8-90.9 19.7-131.6 13.3-45.3 32.9-85.1 58.2-118.3 26.1-34.1 57.9-60.6 94.5-78.7 38.7-19.2 82.7-28.9 130.9-28.9m0-15C302.2 566.6 191.8 740 191.8 954h636.9c0-214-110.4-387.4-318.4-387.4z" fill="#999999"></path><path d="M513.4 823.2c-12.2 0-22-9.9-22-22 0-12.2 9.9-22 22-22 12.2 0 22 9.9 22 22 0.1 12.1-9.8 22-22 22z m0-36.1c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14c0.1-7.7-6.2-14-14-14zM513.4 911.3c-12.2 0-22-9.9-22-22s9.9-22 22-22c12.2 0 22 9.9 22 22s-9.8 22-22 22z m0-36.1c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.2-14-14-14zM516.5 544.9h-18.9c-42.8 0-83.2-16.8-113.7-47.3s-47.3-70.9-47.3-113.7v-66.3h333.3c4.2 0 7.6 3.4 7.6 7.6v58.7c0 42.8-16.8 83.2-47.3 113.7-30.5 30.5-70.9 47.3-113.7 47.3zM351.6 332.6v51.3c0 38.8 15.2 75.4 42.9 103.1 27.7 27.7 64.3 42.9 103.1 42.9h18.9c38.8 0 75.4-15.2 103.1-42.9 27.7-27.7 42.9-64.3 42.9-103.1v-51.3H351.6z" fill="#999999"></path><path d="M677.5 332.6H336.6V134.7c0-13.3 7.9-25.5 20-31C386.9 90 447 67 510.3 67c63.1 0 119.8 22.8 148 36.5 11.7 5.6 19.2 17.7 19.2 30.7v198.4z m-325.9-15h310.9V134.2c0-7.3-4.2-14-10.8-17.1-27-13.1-81.4-35-141.5-35-60.5 0-118.3 22.1-147.4 35.3-6.8 3.1-11.2 9.9-11.2 17.4v182.8zM513.4 692.6c-49 0-88.9-39.9-88.9-88.9v-20.2h8v20.2c0 44.6 36.3 80.9 80.9 80.9s80.9-36.3 80.9-80.9v-17h8v17c0.1 49-39.8 88.9-88.9 88.9zM679.2 840.2H613c-13.2 0-24-10.8-24-24V726h114.2v90.2c0 13.2-10.8 24-24 24zM597 734v82.2c0 8.8 7.2 16 16 16h66.2c8.8 0 16-7.2 16-16V734H597z" fill="#999999"></path><path d="M650.1 731.1h-8v-19.6c0-7.5-6.1-13.5-13.5-13.5s-13.5 6.1-13.5 13.5h-8c0-11.9 9.7-21.5 21.5-21.5s21.5 9.7 21.5 21.5v19.6z" fill="#999999"></path><path d="M562.3 763.7c-29.1 0-52.8-23.7-52.8-52.8v-22.3h8v22.3c0 24.7 20.1 44.8 44.8 44.8s44.8-20.1 44.8-44.8h8c0 29.1-23.7 52.8-52.8 52.8z" fill="#999999"></path></g></svg> 
               <div className="px-6 py-4">
             
                <div className="font-bold text-xl mb-2">  Doctor </div>

                <Link
                  href="/doctor"
                  className="inline-flex items-center justify-center rounded-full w-full bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Login
                </Link>

                </div>

            </div>
          </div>
        </div>
      </div>

    </DefaultLayout2>
  );
};

