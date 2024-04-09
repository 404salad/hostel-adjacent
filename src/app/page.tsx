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
              <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="26" r="2" /><circle cx="44" cy="26" r="2" /><path d="M58.016,52.722l-9.63-2.031A3.018,3.018,0,0,1,46,47.75V45.727A19.034,19.034,0,0,0,55.893,31H57a5,5,0,0,0,0-10H56A17.019,17.019,0,0,0,39,4H23a1.979,1.979,0,0,1-1.862-1.295,1.009,1.009,0,0,0-1.068-.637,7,7,0,0,0-6,7.944A7.01,7.01,0,0,0,18.816,15.6,18.819,18.819,0,0,0,18,21H17a5,5,0,0,0-3.523,8.551A5.6,5.6,0,0,0,14,30v5.189a2.908,2.908,0,0,0-3,.6,2.954,2.954,0,0,0-4,0A2.987,2.987,0,0,0,2,38V61a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V54.266l.222-.389,5.8-1.229c.151-.031.29-.087.435-.132L36,57.6V62h2V57.6l9.539-5.085c.145.045.284.1.435.132l9.631,2.031a9.938,9.938,0,0,1,3.805,1.688l1.18-1.615A11.926,11.926,0,0,0,58.016,52.722Zm-12.489-1.4L37,55.867l-8.527-4.546A5,5,0,0,0,30,47.75v-1.1a18.784,18.784,0,0,0,14,0v1.1A5,5,0,0,0,45.527,51.321ZM37,46A17.016,17.016,0,0,1,20.281,32H53.719A17.016,17.016,0,0,1,37,46ZM16,38V28a1,1,0,0,1,2,0V41H16Zm4-.566a19.012,19.012,0,0,0,2.927,4.286A2.971,2.971,0,0,0,21,41H20ZM57,23a3,3,0,0,1,0,6H56V23ZM16.052,9.732a5,5,0,0,1,3.609-5.544A4.02,4.02,0,0,0,23,6H39A15.018,15.018,0,0,1,54,20.9,5.008,5.008,0,0,1,50,16V15a1,1,0,0,0-1-1H21.211A5.131,5.131,0,0,1,16.052,9.732ZM21.211,16H48a7.006,7.006,0,0,0,6,6.92V29c0,.338-.031.667-.051,1h-33.9c-.02-.333-.051-.662-.051-1V21a16.843,16.843,0,0,1,.79-5.019C20.93,15.989,21.069,16,21.211,16ZM17,23h1v2.184A2.947,2.947,0,0,0,14.184,27,2.973,2.973,0,0,1,14,26,3,3,0,0,1,17,23ZM13,37a1,1,0,0,1,1,1v4a1,1,0,0,1-2,0V38A1,1,0,0,1,13,37ZM9,37a1,1,0,0,1,1,1v4a1,1,0,0,1-2,0V38A1,1,0,0,1,9,37ZM4,38a1,1,0,0,1,2,0v4a1,1,0,0,1-2,0ZM18.132,53.5A1,1,0,0,0,18,54v6H4V44.816a2.908,2.908,0,0,0,3-.6,2.954,2.954,0,0,0,4,0,2.97,2.97,0,0,0,3.685.26A4.983,4.983,0,0,0,19,47h1V45H19a3.006,3.006,0,0,1-2.829-2H21a1,1,0,0,1,1,1v2.734Zm7.481-2.813-4.062.86L23.868,47.5A1,1,0,0,0,24,47V44a2.973,2.973,0,0,0-.5-1.646A19.1,19.1,0,0,0,28,45.727V47.75A3.018,3.018,0,0,1,25.613,50.691Z" /><path d="M56,56H43a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H56a1,1,0,0,0,1-1V57A1,1,0,0,0,56,56Zm-1,4H44V58H55Z" /></svg>
              <div className="px-6 pt-4 pb-2 my-2">
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

