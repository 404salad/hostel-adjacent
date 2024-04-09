"use client"
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";

interface Student {
  regNo: string;
  name: string;
  roomNo: number;
}

const students: Student[] = [
  {
    regNo: "22BPS1059",
    name: "Rajesh Kumar",
    roomNo: 256,
  },
  {
    regNo: "23BAI1015",
    name: "Priya Singh",
    roomNo: 417,
  },
  {
    regNo: "22BCE1941",
    name: "Ankit Sharma",
    roomNo: 832,
  },
  {
    regNo: "23BIT1098",
    name: "Ramesh Patel",
    roomNo: 532,
  },
  {
    regNo: "22BMS2087",
    name: "Sneha Gupta",
    roomNo: 328,
  },
  {
    regNo: "23BEC2023",
    name: "Neha Verma",
    roomNo: 709,
  },
  {
    regNo: "22BCH1776",
    name: "Arjun Singh",
    roomNo: 205,
  },
  {
    regNo: "23BME2012",
    name: "Rahul Jain",
    roomNo: 621,
  },
  {
    regNo: "22BCS1543",
    name: "Deepak Tiwari",
    roomNo: 419,
  },
];

interface RangeCheckerProps {
  minRoomNo: number;
  maxRoomNo: number;
}

const RangeChecker: React.FC<RangeCheckerProps> = ({ minRoomNo, maxRoomNo }) => {
  // Filter students within the range
  const filteredStudents = students.filter(
    (student) => student.roomNo >= minRoomNo && student.roomNo <= maxRoomNo
  );

  // Render names of students within the range
  return (
    <div>
      <h2 className="text-xl text-white">Students within the specified range:</h2>
      <ul className="text-xl text-white">
        {filteredStudents.map((student, index) => (
          <li key={index}>{student.name} &nbsp; {student.regNo}</li>
        ))}
      </ul>
    </div>
  );
};

const Dhobi: React.FC = () => {
  const [startingRoom, setStartingRoom] = useState<string>("");
  const [endingRoom, setEndingRoom] = useState<string>("");

  const handleStartingRoomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartingRoom(event.target.value);
  };

  const handleEndingRoomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndingRoom(event.target.value);
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Dhobi" />
      <div className="p-5 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <h1 className="text-xl">Room numbers collecting today</h1>
        <form className="flex flex-row justify-start w-full text-black p-5 gap-4">
          <div>
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Starting Room Number
            </label>
            <input
              type="text"
              value={startingRoom}
              onChange={handleStartingRoomChange}
              placeholder="Starting Room Input"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Ending Room Number
            </label>
            <input
              type="text"
              value={endingRoom}
              onChange={handleEndingRoomChange}
              placeholder="Ending Room Number"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          <Link
            href="#"
            className="mt-7 inline-flex h-14 items-center justify-end rounded-full bg-primary px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            Notify
          </Link>
        </form>
      </div>
      <RangeChecker minRoomNo={Number(startingRoom)} maxRoomNo={Number(endingRoom)} />
    </DefaultLayout>
  );
};

export default Dhobi;
