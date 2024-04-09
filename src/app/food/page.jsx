'use client'
import React, { useState, useEffect } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import StudentsPresentCard from "@/components/StudentsPresentCard";
import { db } from "@/firebase/config";
import {
  collection,
  getDocs,
  query,
  where,
  updateDoc,
} from "firebase/firestore";

const Attendance = () => {
  const [foods, setFoods] = useState([]);
  const [present, setPresent] = useState("None");
  const [foodCount, setFoodCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const foodCollection = collection(db, "foodpark");
        const foodSnapshot = await getDocs(foodCollection);
        const foodData = foodSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFoods(foodData);
        
        // Count tokens with status true
        const trueTokensCount = foodData.reduce((count, food) => {
          if (food.status === true) {
            return count + 1;
          } else {
            return count;
          }
        }, 0);
        setFoodCount(trueTokensCount);
      } catch (error) {
        console.error("Error fetching food data: ", error);
      }
    };

    fetchData();
  }, []);

  const updateFoodStatus = async (token) => {
    try {
      const foodCollection = collection(db, "foodpark");
      const foodQuery = query(foodCollection, where("token", "==", token));
      const foodSnapshot = await getDocs(foodQuery);
      const foodDocs = foodSnapshot.docs;
      if (foodDocs.length > 0) {
        const foodDoc = foodDocs[0];
        await updateDoc(foodDoc.ref, { status: false });
        console.log("Food status updated successfully");
      } else {
        console.log("Food not found with token:", token);
      }

      // Update food count
      const trueFoodsQuery = query(foodCollection, where("status", "==", true));
      const trueFoodsSnapshot = await getDocs(trueFoodsQuery);
      const trueFoodsCount = trueFoodsSnapshot.docs.length;
      setFoodCount(trueFoodsCount);
    } catch (error) {
      console.error("Error updating food status: ", error);
    }
  };

  const handleReady = (token) => async () => {
    setPresent(token);
    await updateFoodStatus(token);
  };

  return (
    <DefaultLayout>
      <h1 className="py-5 text-3xl">Food Park Tickets</h1>

      {/* <!-- Cards  --> */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
        <StudentsPresentCard block="A block" total={foodCount} rate="" levelUp>
          Orders Pending
        </StudentsPresentCard>
        <StudentsPresentCard block="A block" total={present} rate="" levelDown>
          Present Token
        </StudentsPresentCard>
      </div>
      {/* <!-- Cards End  --> */}

      {/* <!--  list missing --> */}

      <div className="my-5 rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          List of Food Orders
        </h4>

        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Registration Number
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Price
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Phone
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Token Number
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Status
              </h5>
            </div>
          </div>

          {foods.map((brand, key) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-5 ${
                key === foods.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-strokedark"
              }`}
              key={key}
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5 ">
                <p className="hidden text-black dark:text-white sm:block ">
                  {brand.regno}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{brand.totalCost}</p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{brand.phone}</p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-black dark:text-white">{brand.token}</p>
              </div>

              <div
                className="hidden cursor-pointer items-center justify-center p-2.5 sm:flex xl:p-5"
                onClick={handleReady(brand.token, brand.userId)}
              >
                <p className="text-meta-5">
                  {brand.status ? "Pending" : "Ready"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <!--  list missing end --> */}
    </DefaultLayout>
  );
};

export default Attendance;
