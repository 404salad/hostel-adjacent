'use client'
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { db } from "@/firebase/config";
import DefaultLayout from "@/components/Layouts/DefaultLayout"
import { addDoc, collection } from "firebase/firestore";

const Doctor = () => {
  const [form, setForm] = useState({
    email: "",
    registrationId: "",
    age: "",
    problems: "",
    medicines: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const medicinesArray = form.medicines.split(",").map((medicine) => medicine.trim());
    const docRef = await addDoc(collection(db, "doctor"), {
      ...form,
      medicines: medicinesArray,
      date: new Date().toISOString(),
    });
    console.log("Submitted with ID: ", docRef.id);
    setForm({
      email: "",
      registrationId: "",
      age: "",
      problems: "",
      medicines: "",
    });
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Doctor" />

      <div className="  gap-9">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className=" rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Contact Form
              </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6 p-6.5">
                <div>
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Email <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    value={form.email}
                    onChange={handleChange}
                    name="email"
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
                    value={form.registrationId}
                    onChange={handleChange}
                    name="registrationId"
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
                    value={form.age}
                    onChange={handleChange}
                    name="age"
                  />
                </div>
                <div className="">
                  <label className="mb-3 block w-full text-sm font-medium text-black dark:text-white">
                    Problems
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your problems here"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    value={form.problems}
                    onChange={handleChange}
                    name="problems"
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
                    value={form.medicines}
                    onChange={handleChange}
                    name="medicines"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="mx-auto my-3 flex w-1/4 justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Doctor;
