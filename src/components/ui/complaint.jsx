"use client";
import { useState, useEffect } from "react";
import { db } from "@/firebase/config";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const Complaint = () => {
  let updatecomplain = 0;
  const [complaints, setComplaints] = useState([]);
  const [activeComplaints, setActiveComplaints] = useState([]);
  const [solvedComplaints, setSolvedComplaints] = useState([]);
  const [resolveWindow, setResolveWindow] = useState(false);
  const [resolveId, setResolveId] = useState("");

  const [selectedItem, setSelectedItem] = useState(""); // Track selected item
  const [quantity, setQuantity] = useState(0); // Track quantity

  const findRelativeDate = (date) => {
    const currentDate = new Date();
    const complainDate = new Date(date);
    const differenceInDays = Math.floor(
      (currentDate - complainDate) / (1000 * 60 * 60 * 24),
    );

    if (differenceInDays === 0) {
      return "Today";
    } else if (differenceInDays === 1) {
      return "1 day ago";
    } else if (differenceInDays === 2) {
      return "2 days ago";
    } else {
      return `${differenceInDays} days ago`;
    }
  };

  const handleResolve = (complaintId) => {
    setResolveWindow(true);
    setResolveId(complaintId);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Get the current inventory data
      const docRef = doc(db, "techHelp", "CoQbkfU8aoMlnH0EJvOr");
      const docSnap = await getDoc(docRef);
      const currentInventory = docSnap.data();

      // Update inventory based on selected item and quantity
      await updateDoc(docRef, {
        [selectedItem]: currentInventory[selectedItem] + quantity,
      });
      console.log("Inventory updated successfully");
    } catch (error) {
      console.error("Error updating inventory: ", error);
    }
    setResolveWindow(false); // Close the resolve window after submission

    // Reset the form fields
    setSelectedItem("");
    setQuantity(0);

    // Update the complaint status to solved
    const complainRef = doc(db, "Complaints", resolveId);
    await updateDoc(complainRef, { Status: 0 });
    console.log("Complaint resolved successfully");
    updatecomplain = updatecomplain + 1;
  };

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const complainCollection = collection(db, "Complaints");
        const messagesSnapshot = await getDocs(complainCollection);
        const complainData = messagesSnapshot.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        });

        // Separate active and solved complaints
        const active = [];
        const solved = [];
        complainData.forEach((complaint) => {
          if (complaint.Status === 0) {
            solved.push(complaint);
          } else {
            active.push(complaint);
          }
        });

        setActiveComplaints(active);
        setSolvedComplaints(solved);
        setComplaints(complainData);
      } catch (error) {
        console.error("Error fetching complaints: ", error);
      }
    };

    fetchComplaints();
  }, [updatecomplain]);

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      {/* Resolve Window */}
      {resolveWindow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-96 rounded-md bg-white p-8">
            <h4 className="text-xl font-semibold text-black dark:text-white">
              Inventory Utilised
            </h4>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="flex">
                <div className="m-2 w-full">
                  <select
                    value={selectedItem}
                    onChange={(e) => setSelectedItem(e.target.value)}
                    className="border-gray-300 h-full rounded-md border px-3 py-2"
                  >
                    <option value="">Select Item</option>
                    <option value="chair">Chair</option>
                    <option value="table">Table</option>
                    <option value="bunker">Bunker</option>
                    <option value="fan">Fan</option>
                    <option value="ac">AC</option>
                    <option value="mirrors">Mirror</option>
                    <option value="tv">TV</option>
                    <option value="iron">Iron</option>
                  </select>
                </div>
                <div className="m-2 w-full">
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="border-gray-300 rounded-md border px-3 py-2"
                    placeholder="Quantity"
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  className="rounded-md bg-red px-4 py-2 text-white"
                  onClick={() => setResolveWindow(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ml-4 rounded-md bg-green-400 px-4 py-2 text-white"
                >
                  Resolve
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Complaints List
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5">
        {/* Header */}
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Complaint Type</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Register Number</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Room Number</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Complaint Raised</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Status</p>
        </div>
      </div>

      {/* Active Complaints */}
      {activeComplaints.length > 0 && (
        <div className="border-t border-stroke px-4 py-2 dark:border-strokedark">
          <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
            Active Complaints
          </h4>
          {activeComplaints.map((complaint, key) => (
            <div
              className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5"
              key={key}
            >
              {/* Content */}
              <div className="col-span-3 flex items-center">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <p className="text-sm text-black dark:text-white">
                    {complaint.Category}
                  </p>
                </div>
              </div>
              <div className="col-span-2 hidden items-center sm:flex">
                <p className="text-sm text-black dark:text-white">
                  {complaint.Registration}
                </p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {complaint.Room}
                </p>
              </div>
              <div className="col-span-2 flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {findRelativeDate(complaint.Date)}
                </p>
              </div>
              <div
                className="col-span-1 flex items-center"
                onClick={() => {
                  handleResolve(complaint.id);
                }}
              >
                <p className="text-sm text-meta-3">
                  <span className="rounded-lg bg-red p-2 text-white">
                    Active
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Solved Complaints */}
      {solvedComplaints.length > 0 && (
        <div className="border-t border-stroke px-4 py-2 dark:border-strokedark">
          <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
            Solved Complaints
          </h4>
          {solvedComplaints.map((complaint, key) => (
            <div
              className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5"
              key={key}
            >
              {/* Content */}
              <div className="col-span-3 flex items-center">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <p className="text-sm text-black dark:text-white">
                    {complaint.Category}
                  </p>
                </div>
              </div>
              <div className="col-span-2 hidden items-center sm:flex">
                <p className="text-sm text-black dark:text-white">
                  {complaint.Registration}
                </p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {complaint.Room}
                </p>
              </div>
              <div className="col-span-2 flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {findRelativeDate(complaint.Date)}
                </p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-meta-3">
                  <span className="rounded-lg bg-green-400 p-2 text-white">
                    Solved
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Complaint;

// "use client";
// import { useState, useEffect } from "react";
// import { db } from "@/firebase/config";
// import { collection, getDocs } from "firebase/firestore";
// import { doc, updateDoc } from "firebase/firestore";

// const Complaint = () => {
//   const [complaints, setComplaints] = useState([]);
//   const [activeComplaints, setActiveComplaints] = useState([]);
//   const [solvedComplaints, setSolvedComplaints] = useState([]);
//   const [resolveWindow, setResolveWindow] = useState(false);

//   const [chair, setChair] = useState(0);
//   const [table, setTable] = useState(0);
//   const [fan, setFan] = useState(0);
//   const [ac, setAC] = useState(0);
//   const [bunker, setBunker] = useState(0);
//   const [mirrors, setMirrors] = useState(0);
//   const [tv, setTV] = useState(0);
//   const [iron, setIron] = useState(0);
//   const [enabled, setEnabled] = useState(true);
//   const [inventory, setInventory] = useState([]);
//   const [updatedValue, setUpdatedValue] = useState(0);

//   const findRelativeDate = (date) => {
//     const currentDate = new Date();
//     const complainDate = new Date(date);
//     const differenceInDays = Math.floor(
//       (currentDate - complainDate) / (1000 * 60 * 60 * 24),
//     );

//     if (differenceInDays === 0) {
//       return "Today";
//     } else if (differenceInDays === 1) {
//       return "1 day ago";
//     } else if (differenceInDays === 2) {
//       return "2 days ago";
//     } else {
//       return `${differenceInDays} days ago`;
//     }
//   };

//   const handleResolve = () => {
//     setResolveWindow(true);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission here
//     console.log("Form submitted");
//       updateDoc(doc(db, "techHelp", "CoQbkfU8aoMlnH0EJvOr"), {
//         chair: chair + inventory.chair,
//         table: table + inventory.table,
//         fan: fan + inventory.fan,
//         ac: ac + inventory.ac,
//         bunker: bunker + inventory.bunker,
//         mirrors: mirrors + inventory.mirrors,
//         tv: tv + inventory.tv,
//         iron: iron + inventory.iron,
//       });
//     };
//   useEffect(() => {
//     const fetchComplaints = async () => {
//       try {
//         const complainCollection = collection(db, "Complaints");
//         const messagesSnapshot = await getDocs(complainCollection);
//         const complainData = messagesSnapshot.docs.map((doc) => {
//           const data = doc.data();
//           data.id = doc.id;
//           return data;
//         });

//         console.log("Complaints data: ", complainData);

//         // Separate active and solved complaints
//         const active = [];
//         const solved = [];
//         complainData.forEach((complaint) => {
//           if (complaint.Status === 0) {
//             solved.push(complaint);
//           } else {
//             active.push(complaint);
//           }
//         });

//         setActiveComplaints(active);
//         setSolvedComplaints(solved);
//         setComplaints(complainData);
//       } catch (error) {
//         console.error("Error fetching complaints: ", error);
//       }
//     };

//     fetchComplaints();
//   }, []);

//   return (
//     <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
//       /* Resolve Window */
//       {resolveWindow && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="w-96 rounded-md bg-white p-8">
//             <h4 className="text-xl font-semibold text-black dark:text-white">
//               Inventory Utilised
//             </h4>
//             <form onSubmit={handleSubmit} className="mt-4 flex">
//               <div className=" m-2 w-full">
//                 <select
//                   name="invent"
//                   className="h-full border-gray-300 rounded-md border px-3 py-2"
//                   onChange={(e) => setInventory({ ...inventory, [e.target.name]: parseInt(e.target.value) })}
//                 >
//                   <option value="chair">Chair</option>
//                   <option value="table">Table</option>
//                   <option value="bunker">Bunker</option>
//                   <option value="fan">Fan</option>
//                   <option value="ac">Ac</option>
//                   <option value="mirrors">Mirror</option>
//                   <option value="tv">TV</option>
//                   <option value="iron">Iron</option>
//                 </select>
//               </div>
//               <div className=" m-2 w-full">
//                 <input
//                   type="number"
//                   className="border-gray-300 rounded-md border px-3 py-2"
//                   placeholder="Quantity"
//                   value={updatedValue}
//                   onChange={(e) => setUpdatedValue(e.target.value)}
//                 />
//               </div>
//             </form>
//             <p className="mt-2 text-sm text-black dark:text-white"></p>
//             <div className="mt-4 flex justify-end">
//               <button
//                 className="rounded-md bg-red px-4 py-2 text-white"
//                 onClick={() => setResolveWindow(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="ml-4 rounded-md bg-green-400 px-4 py-2 text-white"
//                 onClick={() => {
//                   setResolveWindow(false);
//                   setInventory({
//                     ...inventory,
//                     [inventory.invent]: inventory[inventory.invent] + parseInt(updatedValue),
//                   });
//                 }}
//               >
//                 Resolve
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       <div className="px-4 py-6 md:px-6 xl:px-7.5">
//         <h4 className="text-xl font-semibold text-black dark:text-white">
//           Complaints List
//         </h4>
//       </div>

//       <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5">
//         {/* Header */}
//         <div className="col-span-3 flex items-center">
//           <p className="font-medium">Complaint Type</p>
//         </div>
//         <div className="col-span-2 hidden items-center sm:flex">
//           <p className="font-medium">Register Number</p>
//         </div>
//         <div className="col-span-1 flex items-center">
//           <p className="font-medium">Room Number</p>
//         </div>
//         <div className="col-span-2 flex items-center">
//           <p className="font-medium">Complaint Raised</p>
//         </div>
//         <div className="col-span-1 flex items-center">
//           <p className="font-medium">Status</p>
//         </div>
//       </div>

//       {/* Active Complaints */}
//       {activeComplaints.length > 0 && (
//         <div className="border-t border-stroke px-4 py-2 dark:border-strokedark">
//           <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
//             Active Complaints
//           </h4>
//           {activeComplaints.map((complaint, key) => (
//             <div
//               className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5"
//               key={key}
//             >
//               {/* Content */}
//               <div className="col-span-3 flex items-center">
//                 <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
//                   <p className="text-sm text-black dark:text-white">
//                     {complaint.Category}
//                   </p>
//                 </div>
//               </div>
//               <div className="col-span-2 hidden items-center sm:flex">
//                 <p className="text-sm text-black dark:text-white">
//                   {complaint.Registration}
//                 </p>
//               </div>
//               <div className="col-span-1 flex items-center">
//                 <p className="text-sm text-black dark:text-white">
//                   {complaint.Room}
//                 </p>
//               </div>
//               <div className="col-span-2 flex items-center">
//                 <p className="text-sm text-black dark:text-white">
//                   {findRelativeDate(complaint.Date)}
//                 </p>
//               </div>
//               <div
//                 className="col-span-1 flex items-center"
//                 onClick={() => {
//                   handleResolve(complaint.id);
//                 }}
//               >
//                 <p className="text-sm text-meta-3">
//                   <span className="rounded-lg bg-red p-2 text-white">
//                     Active
//                   </span>
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Solved Complaints */}
//       {solvedComplaints.length > 0 && (
//         <div className="border-t border-stroke px-4 py-2 dark:border-strokedark">
//           <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
//             Solved Complaints
//           </h4>
//           {solvedComplaints.map((complaint, key) => (
//             <div
//               className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5"
//               key={key}
//             >
//               {/* Content */}
//               <div className="col-span-3 flex items-center">
//                 <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
//                   <p className="text-sm text-black dark:text-white">
//                     {complaint.Category}
//                   </p>
//                 </div>
//               </div>
//               <div className="col-span-2 hidden items-center sm:flex">
//                 <p className="text-sm text-black dark:text-white">
//                   {complaint.Registration}
//                 </p>
//               </div>
//               <div className="col-span-1 flex items-center">
//                 <p className="text-sm text-black dark:text-white">
//                   {complaint.Room}
//                 </p>
//               </div>
//               <div className="col-span-2 flex items-center">
//                 <p className="text-sm text-black dark:text-white">
//                   {findRelativeDate(complaint.Date)}
//                 </p>
//               </div>
//               <div className="col-span-1 flex items-center">
//                 <p className="text-sm text-meta-3">
//                   <span className="rounded-lg bg-green-400 p-2 text-white">
//                     Solved
//                   </span>
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Complaint;
