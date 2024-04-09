import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SelectGroupOne from "@/components/SelectGroup/SelectGroupOne";
import Link from "next/link";
import { useEffect, useState } from "react";


const dhobi = () => {



  return (
    <DefaultLayout>
      <Breadcrumb pageName="Dhobi" />

      <div className="  gap-9">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className=" rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Contact Form
              </h3>
            </div>
            <form >
  <div className="p-6.5 grid grid-cols-2 gap-6">
    <div>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        Name
      </label>
      <input
        type="text"
        placeholder="Enter your last name"
        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
      />
    </div>
    <div>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        Email <span className="text-meta-1">*</span>
      </label>
      <input
        type="email"
        placeholder="Enter your email address"
        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
      />
    </div>
    <div>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        Registration Id
      </label>
      <input
        type="text"
        placeholder="Registration number here"
        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
      />
    </div>
    <div>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        Age
      </label>
      <input
        type="number"
        placeholder="Enter your age here"
        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
      />
    </div>
    <div className="col-span-2">
      <label className="mb-3 w-full block text-sm font-medium text-black dark:text-white">
        Problems
      </label>
      <input
        type="text"
        placeholder="Enter your problems here"
        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
      />
    </div>
   
    <div className="col-span-2">
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        Medicines
      </label>
      <textarea
        rows={6}
        placeholder="Type your message"
        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
      ></textarea>
    </div>
  </div>
  <button type="submit" className="flex mx-auto w-1/4 my-3 justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
    Send Message
  </button>
</form>

          </div>
        </div>

      </div>
    </DefaultLayout>
  );
};

export default dhobi;
